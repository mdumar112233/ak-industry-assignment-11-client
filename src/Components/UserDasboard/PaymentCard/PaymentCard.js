import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import './PaymentCard.css';

const PaymentCard = ({userData}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  console.log(paymentSuccess);

  
  const handleSubmit = async (event,paymentSuccess) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    console.log(paymentMethod);
    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod.id);
      // handlePayment(paymentMethod.id);
      setPaymentError(null);
    }
    console.log(paymentSuccess);

    console.log(userData);


  };

  const handleUserData = () => {
    const userInfoData = {...userData}
      console.log(userInfoData);
      fetch('http://localhost:5000/userInfo', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(userInfoData)
      })
      .then(res => {
        console.log('data send successfully');
      })
  }


  return (
    <div>
          <form onSubmit={handleSubmit}>
            <CardElement />
             <button onClick={handleUserData} type="submit" disabled={!stripe} className='pay-btn'>
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