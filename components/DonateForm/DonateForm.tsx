import React, { useState } from 'react'

import CustomDonationInput from './CustomDonationInput'
import getStripe from '../../utilities/get-stripejs'
import { fetchPostJSON } from '../../utilities/api-helpers'
import { formatAmountForDisplay } from '../../utilities/stripe-helpers'
import * as config from '../../config'
import Button from '@material-ui/core/Button';
import './donateForm.scss'

const ElementsDonationForm
 = () => {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/checkout/donateSession', {
      amount: input.customDonation,
    })

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

    // Redirect to Checkout.
    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message)
    setLoading(false)
  }
 
  return (
    <div className='donateForm'>

    <form onSubmit={handleSubmit}>


      <div className='formWrapper'>
      <CustomDonationInput
        className="checkout-style"
        name={'customDonation'}
        value={input.customDonation}
        min={config.MIN_AMOUNT}
        max={config.MAX_AMOUNT}
        step={config.AMOUNT_STEP}
        currency={config.CURRENCY}
        onChange={handleInputChange}
      />


      <Button
        className="checkoutDonateBtn"
        type="submit"
        disabled={loading}
      >
        Donate {formatAmountForDisplay(input.customDonation, config.CURRENCY)}
      </Button>
      </div>
      
    </form>
    </div>

  )
}

export default ElementsDonationForm
