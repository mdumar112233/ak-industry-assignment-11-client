import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './ServiceListDetail.css';

const ServiceListDetail = ({serviceList}) => {
    const [status, setStatus] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://calm-anchorage-95047.herokuapp.com/status?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setStatus(data))
    }, [status])

    return (
        <div>
            <div className='col-md-4'>
                <h3 className='ms-4 mt-3'>Booking List</h3>
            <div className="service mt-5 ms-4">
                <div className="img-option d-flex justify-content-between">
                    <div>
                        <img src={serviceList.image} alt=""/>
                    </div>
                    <div className='status'>
                        <h4>{status.status}</h4>
                    </div>
                </div>
                <h5 className='mt-4 mb-3'>{serviceList.name}</h5>
                <p>{serviceList.description}</p>
            </div>
        </div>
        </div>
    );
};

export default ServiceListDetail;