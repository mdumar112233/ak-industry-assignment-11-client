import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import './PaymentCard.css';

const PaymentCard = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      // handlePayment(paymentMethod.id);
    }
  };

  return (
    <div>
          <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe} className='pay-btn'>
              Pay
            </button>
          </form>
          {
            paymentError && <p style={{color: 'red'}}>{paymentError}</p>
          }
          {
            paymentSuccess && <p style={{color: 'green'}}>Your payment was successfully</p>
          }
    </div>
  );
};

export default PaymentCard;