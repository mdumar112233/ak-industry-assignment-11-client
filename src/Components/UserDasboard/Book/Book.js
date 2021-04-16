import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCard from '../PaymentCard/PaymentCard';
import { useParams } from 'react-router';
const stripePromise = loadStripe('pk_test_51IeAn5F8Tt6idX1YNJvJVrIfNjU3XrD6sHsAdImNegbHw4cdba24Ps7RmrvZ0hrI3uVrTVxzgyhI6SxkDlPcs66700yOJaMdXL');

const Book = () => {
    const {id} = useParams();
    const [serviceInfo, setServiceInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/serviceInfo/'+id)
        .then(res => res.json())
        .then(data => setServiceInfo(data))
    }, [id])

    return (
        <div className='row'>
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5 ml-5" style={{position: 'absolute', right: 0}}>
                <div className="ms-4">
                    <h3>Book</h3>
                    <input className='w-50' type="text" placeholder='Enter your name'/><br/>
                    <input className='mt-3 mb-3 w-50' type="text" placeholder='Enter your email'/><br/>
                    {
                        serviceInfo.map(service => <input className='w-50' type="text" placeholder='Enter your service' value={service.name}/>)
                    }
                    
                    <div className='w-50 mt-3'>
                        <Elements stripe={stripePromise}>
                            <PaymentCard></PaymentCard>                   
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;