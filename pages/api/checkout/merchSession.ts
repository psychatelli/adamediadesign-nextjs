
import type { NextApiRequest, NextApiResponse } from 'next'
 
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27'
});
 

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {quantity, price_id, cancelPath} = req.body
 
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['US'],
          },
        line_items: [
          {
              price: price_id,
              quantity
          }
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/${cancelPath}`,
      })

      
  res.status(200).json({ sessionId: session.id })
}
 