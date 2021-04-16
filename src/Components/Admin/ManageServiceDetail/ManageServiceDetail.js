import React from 'react';
import './ManageServiceDetail.css';

const ManageServiceDetail = ({data}) => {
    return (
        <div className='col-md-4'>
            <div style={{height:'300px'}} className="service mt-3 text-center">
                <div className="img-option">
                    <div>
                        <img src={data.image} alt=""/>
                    </div>
                </div>
                <h5 className='mt-4 mb-3'>{data.name}</h5>
                <p>{data.description}</p>
                <button className='delete-btn'>Delete</button>
            </div>
        </div>
    );
};

export default ManageServiceDetail;