
// PaymentForm.js

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51OqsJ5SCPuWiCxONKcpqZhXMmiwdImAVsdAZaTN7dk6Drg61bO4z5Gy28qPQfgyNEAwFde2FRJCeQcdc7qrBi7cn00bOvXVHcj');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      // Create PaymentMethod
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      // Send paymentMethod id to your server
      const { data } = await axios.post('http://localhost:8800/api/payment', {
        paymentMethodId: paymentMethod.id,
        amount: amount * 100,
      });

      //console.log(data.message);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const PaymentForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentForm;
