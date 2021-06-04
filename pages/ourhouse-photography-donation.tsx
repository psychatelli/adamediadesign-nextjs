import { NextPage } from 'next'
import { Elements } from '@stripe/react-stripe-js'
import getStripe from '../utilities/get-stripejs'
import ElementsForm from '../components/ElementsForm/ElementsDonationForm'


const Donate: NextPage = () => {
  return (
      <div className="eventDonation">
        <h1>Donate with Elements</h1>
        <p>Donate to our project 💖</p>
        <Elements stripe={getStripe()}>
          <ElementsForm />
        </Elements>
      </div>
  )
}

export default Donate