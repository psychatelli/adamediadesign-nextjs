

  import React from "react";
import Stripe from "stripe";
import { parseCookies, setCookie } from "nookies";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

export const getServerSideProps = async ctx => {
  const stripe = new Stripe(process.env.STRIPE_SK);

  let paymentIntent;

  const { paymentIntentId } = await parseCookies(ctx);

  if (paymentIntentId) {
    paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return {
      props: {
        paymentIntent
      }
    };
  }

  paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "gbp"
  });

  setCookie(ctx, "paymentIntentId", paymentIntent.id);

  return {
    props: {
      paymentIntent
    }
  };
};

const CheckoutPage = ({ paymentIntent }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm paymentIntent={paymentIntent} />

{    
console.log(`stripe ${process.env.STRIPE_SK}`)
}

  </Elements>
);

export default CheckoutPage;


