import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCard from '../PaymentCard/PaymentCard';
const stripePromise = loadStripe('pk_test_51IeAn5F8Tt6idX1YNJvJVrIfNjU3XrD6sHsAdImNegbHw4cdba24Ps7RmrvZ0hrI3uVrTVxzgyhI6SxkDlPcs66700yOJaMdXL');

const Book = () => {
    return (
        <div className='row'>
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5 ml-5" style={{position: 'absolute', right: 0}}>
                <h3>Book</h3>
                <input className='w-50' type="text" placeholder='Enter your name'/><br/>
                <input className='mt-3 mb-3 w-50' type="text" placeholder='Enter your email'/><br/>
                <input className='w-50' type="text" placeholder='Enter your service'/>
                <div className='w-50 mt-3'>
                    <Elements stripe={stripePromise}>
                        <PaymentCard></PaymentCard>                   
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Book;