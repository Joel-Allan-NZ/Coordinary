import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import CheckoutForm from './CheckoutForm'
import { useAuth0 } from '@auth0/auth0-react'
import useCustomStripe from '../../../../hooks/useCustomStripe'

const stripePromise = loadStripe('pk_test_bxJuE0fpBxauHmThIvNnWtDt')

interface Props {
  amount: number
}

export default function Checkout(props: Props) {
  const [clientSecret, setClientSecret] = useState('')
  const { getAccessTokenSilently } = useAuth0()
  const { useCreatePaymentIntent } = useCustomStripe()
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const fetchdata = async () => {
      const token = await getAccessTokenSilently()
      const vals = await useCreatePaymentIntent.mutateAsync({
        token,
        amount: props.amount,
      })
      setClientSecret(() => vals.clientSecret)
      console.log(vals)
    }
    if (clientSecret === '' && count === 0) {
      fetchdata()
      setCount(() => 1)
    }
  }, [
    clientSecret,
    count,
    getAccessTokenSilently,
    props.amount,
    useCreatePaymentIntent,
  ])

  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}
