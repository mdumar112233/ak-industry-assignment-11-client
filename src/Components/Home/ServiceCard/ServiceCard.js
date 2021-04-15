import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    return (
            <div className="col-md-4 text-center">
                <div className="service-card mt-5">
                    <img src={service.icon} alt=""/>
                    <h4 className='service-title mt-4 mb-4'>{service.name}</h4>
                    <p>{service.description}</p>
                </div>
            </div>
    );
};

export default ServiceCard;