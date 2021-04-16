import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    return (
            <div className="col-md-4 text-center">
                <div className="service-card mt-5">
                    <img src={service.image} alt=""/>
                    <h4 className='service-title mt-3 mb-2'>{service.name}</h4>
                    <h5 style={{color: 'teal'}}>${service.price}</h5>
                    <p>{service.description}</p>
                </div>
            </div>
    );
};

export default ServiceCard;