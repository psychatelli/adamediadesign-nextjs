'use strict';
const { sanitizeEntity } = require('strapi-utils')
const stripe = require('stripe')(process.env.STRIPE_SK)
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */


 /**
  * Given a dollar amount, return the amount in cents
  * @param {*} number 
  */
 const fromDecimalToInt = (number) => parseInt(number * 100)

module.exports = {
    /**
     * Only returns orders that belongs to the logged in user
     * @param {any} ctx 
     */
    async find(ctx) {
        const { user } = ctx.state // This is the magic user

        let entities
        if(ctx.query._q){
            entities = await strapi.services.order.search({...ctx.query, user: user.id})
        }else {
            entities = await strapi.services.order.find({...ctx.query, user: user.id})
        }
        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.order}))
    },
    /**
     * Return only one order as long as it belongs to the user
     * @param {any} ctx 
     */
    async findOne(ctx) {
        const { id } = ctx.params
        const { user } = ctx.state

        const entity = await strapi.services.order.findOne({ id, user: user.id })
        return sanitizeEntity(entity, { model: strapi.models.order })
    },

    /**
     * Creates an order and setsup the Stripe Checkout session for the frontend
     * @param {any} ctx 
     */
    async create(ctx) {
        const { product } = ctx.request.body

        if(!product) {
            return ctx.throw(400, 'Please specify a product')
        }

        const realProduct = await strapi.services.product.findOne({ id: product.id })
        if(!realProduct) {
            return ctx.throw(404, 'No product with such id')
        }

        const { user } = ctx.state
        const BASE_URL = ctx.request.headers.origin || 'http://localhost:3000' //SO WE CAN REDIRECT BACK

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: realProduct.name
                        },
                        unit_amount: fromDecimalToInt(realProduct.price),
                    },
                    quantity: 1,
                },
            ],
            customer_email: user.email, //Automatically added by Magic Link
            mode: "payment",
            success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: BASE_URL,
        })

    //TODO Create Temp Order here
    const newOrder = await strapi.services.order.create({
        user: user.id,
        product: realProduct.id,
        total: realProduct.price,
        status: 'unpaid',
        checkout_session: session.id
    })

    return { id: session.id }
},
    /**
     * Given a chechout_session, verifies payment and updates the order
     * @param {*} ctx 
     */
    async confirm(ctx) {
        const { checkout_session } = ctx.request.body
        console.log("checkout_session", checkout_session)
        const session = await stripe.checkout.sessions.retrieve(
            checkout_session
        )
        console.log("verify session", session)

        if(session.payment_status === "paid"){
            //Update order
            const newOrder = await strapi.services.order.update({
                checkout_session
            },
            {
                status: 'paid'
            })

            return newOrder
    
        } else {
            ctx.throw(400, "It seems like the order wasn't verified, please contact support")
        }
    }


};
