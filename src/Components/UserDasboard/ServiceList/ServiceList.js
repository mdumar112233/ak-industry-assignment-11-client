import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import map from '../../../image/sketch.png';
import ServiceListDetail from '../ServiceListDetail/ServiceListDetail';

const serviceListData = [
    {
        name: 'Construction Map',
         image: map,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto'
    }
]

const ServiceList = () => {
    return (
        <div className='row'>
            <Sidebar></Sidebar>
            <div className='col-md-10'>
                <div className="row">
                    {
                        serviceListData.map(serviceList => <ServiceListDetail serviceList={serviceList}></ServiceListDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceList;