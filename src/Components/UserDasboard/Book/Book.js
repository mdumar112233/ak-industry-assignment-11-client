import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import PaymentCard from '../PaymentCard/PaymentCard';
import Sidebar from '../Sidebar/Sidebar';
import './Book.css';

const stripePromise = loadStripe('pk_test_51IeAn5F8Tt6idX1YNJvJVrIfNjU3XrD6sHsAdImNegbHw4cdba24Ps7RmrvZ0hrI3uVrTVxzgyhI6SxkDlPcs66700yOJaMdXL');

const Book = ({handlePayment}) => {
    const {id} = useParams();
    const [serviceInfo, setServiceInfo] = useState([]);
    const [isUserData, setIsUserData] = useState({
        name: '',
        email: '',
        service: '',
        isData: false
    });
    console.log(isUserData);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch('https://murmuring-earth-58571.herokuapp.com/serviceInfo/'+id)
        .then(res => res.json())
        .then(data => setServiceInfo(data))
    }, [id])

    console.log(handlePayment);

    const handleUserInfo = () => {
        console.log(handlePayment);
        const newData = {...isUserData};
        newData.name = loggedInUser.name;
        newData.email = loggedInUser.email;
        newData.service = serviceInfo.name;
        newData.isData = true;
        setIsUserData(newData);
    }

    return (
        <div className='row' style={{width: '100%'}}>
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5 ml-5" style={{position: 'absolute', right: 0}}>
                <div className="ms-4">
                        {
                            isUserData.isData ? '': <div>
                            <h3>Book</h3>
                           <form>
                           <input name='name' className='w-50' type="text" value={loggedInUser.name} placeholder='Enter your name'/><br/>
                            <input name='email' className='mt-3 mb-3 w-50' value={loggedInUser.email} type="email" placeholder='Enter your email'/><br/>
                            <input name='service' className='w-50' type="text" placeholder='Enter your service' value={serviceInfo.name} required/>
                           </form>
                            <br/>
                            <button className='book-submit' onClick={handleUserInfo}>submit</button>
                            </div>
                        }
                        {
                            isUserData.isData ? <div className='w-50 mt-3'>
                            <Elements stripe={stripePromise}>
                                <PaymentCard userData={isUserData}></PaymentCard>                   
                            </Elements> 
                        </div> : ''
                        }                    
                </div>
            </div>
        </div>
    );
};

export default Book;