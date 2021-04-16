import React from 'react';
import './ServiceListDetail.css';

const ServiceListDetail = ({serviceList}) => {
    return (
        <div className='col-md-4'>
                <h3 className='ms-4 mt-3'>Booking List</h3>
            <div className="service mt-5">
                <div className="img-option d-flex justify-content-between">
                    <div>
                        <img src={serviceList.image} alt=""/>
                    </div>
                    <div className='status'>
                        <form>
                            <select name="status" id="status" >
                                <option className='panding'value="Panding">Panding</option>
                                <option className='start' value="Start">Start</option>
                                <option className='done' value="Done">Done</option>
                            </select>
                        </form>
                    </div>
                </div>
                <h5 className='mt-4 mb-3'>{serviceList.name}</h5>
                <p>{serviceList.description}</p>
            </div>
        </div>
    );
};

export default ServiceListDetail;