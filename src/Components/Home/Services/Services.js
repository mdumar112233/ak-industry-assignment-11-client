import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';


const Services = () => {
    const [serviceCard, setServiceCard] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/serviceData')
        .then(res => res.json())
        .then(data => setServiceCard(data))
    }, [])
    
    return (
        <div className='service-container'>
            <div className='container '>
            <div className="main-title text-center">
            <h2>Our Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque!</p>
            </div>
            <div className="d-flex flex-column">
                <div className='row mt-5' style={{cursor: 'pointer'}}>
                    {
                        serviceCard.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;