import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';
import map from '../../../image/sketch.png';
import plan from '../../../image/plan.png';
import home from '../../../image/home(1).png';
import { useHistory } from "react-router-dom";

const serviceData = [
    {
        name: 'Construction Map',
        icon: map,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto'
    },
    {
        name: 'Planning',
        icon: plan,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto'
    },
    {
        name: 'Home Design',
        icon: home,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto'
    }
]

const Services = () => {
    const history = useHistory();
    const handleService = () => {
        history.push('/dashboard')
    }
    
    return (
        <div className='container service-container'>
            <div className="main-title text-center">
            <h3>Our Services</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque!</p>
            </div>
            <div className="d-flex justify-content-center">
                <div className='row mt-5' onClick={handleService} style={{cursor: 'pointer'}}>
                    {
                        serviceData.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;