import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import upload from '../../../image/cloud-computing.png';
import './AddService.css';

const AddService = () => {
    return (
        <div className='row'>
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10">
                <h3 className='ms-4 mt-5'>Add Service</h3>
                <div className='d-flex ms-4 mt-3'>
                    <div className='mt-3'>
                        <label htmlFor="">Service Title</label><br/>
                        <input type="text" placeholder='service'/>
                    </div>
                    <div className='ms-5'>
                        <p>Image</p>
                        <label className='image-upload' htmlFor="image">
                            <span> <img style={{height: '18px', marginTop: '-5px'}} src={upload} alt=""/></span>   Upload image</label><br/>
                        <input id='image' type="file" style={{visibility: 'hidden'}}/>
                    </div>
                </div>
                <div className="ms-4">
                    <label htmlFor="">Description</label><br/>
                    <input style={{paddingBottom: '50px'}} type="text" placeholder="Description"/>
                </div>
                <button className='service-btn'>Submit</button>
            </div>
        </div>
    );
};

export default AddService;