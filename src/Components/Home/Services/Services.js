import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';


const Services = () => {
    const [serviceCard, setServiceCard] = useState([]);
    console.log('my data', serviceCard)

    useEffect(() => {
        fetch('https://murmuring-earth-58571.herokuapp.com/serviceData')
        .then(res => res.json())
        .then(data => setServiceCard(data))
    }, [])
    
    return (
        <div className='service-container'>
            <div className='container '>
            <div className="main-title text-center">
            <h2 style={{fontFamily: "'Bebas Neue', cursive", letterSpacing: '2px', wordSpacing: '2px', fontSize:'40px'}}>Our Services</h2>
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