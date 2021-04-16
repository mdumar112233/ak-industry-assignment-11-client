import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import upload from '../../../image/cloud-computing.png';
import './AddService.css';
import axios from 'axios';

const AddService = () => {
    const [serviceData, setServiceData] = useState({});
    const [imageUrl, setImageUrl] = useState(null);


    const handleChange= (e) => {
        const newData = {...serviceData};
        newData[e.target.name] = e.target.value;
        setServiceData(newData);
    }

    const handleImage = e => {
        console.log(e.target.files);
        const imageData = new FormData();
        imageData.set('key', '0bbd94d120064c98ef673307396657da');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => {
            setImageUrl(res.data.data.display_url);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleSubmit = () => {
        const submitData = {...serviceData, image: imageUrl}
        console.log(submitData);

        if(imageUrl){
            fetch('http://localhost:5000/services', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(submitData)
            })
            .then(res => {
                console.log('service data uploaded');
            })
        }
    }


    return (
        <div className='row'>
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10">
                <h3 className='ms-4 mt-5'>Add Service</h3>
                <div className='d-flex ms-4 mt-3'>
                    <div className='mt-3'>
                        <label htmlFor="">Service Title</label><br/>
                        <input onBlur={handleChange} name='name' type="text" placeholder='service'/>
                    </div>
                    <div className='ms-5'>
                        <p>Image</p>
                        <label className='image-upload' htmlFor="image">
                            <span> <img style={{height: '18px', marginTop: '-5px'}} src={upload} alt=""/></span>   Upload image</label><br/>
                        <input onChange={handleImage} id='image' type="file" style={{visibility: 'hidden'}}/>
                    </div>
                </div>
                <div className="d-flex ms-4">
                    <div className='mt-2'>
                        <label htmlFor="">Price</label><br/>
                        <input onBlur={handleChange} name='price' type="number" placeholder='Price'/>
                    </div>
                    <div className='ms-5'>
                        <label htmlFor="">Description</label><br/>
                        <input onBlur={handleChange} name='description' style={{paddingBottom: '50px'}} type="text" placeholder="Description"/>
                    </div>
                </div>
                <button onClick={handleSubmit} className='service-btn'>Submit</button>
            </div>
        </div>
    );
};

export default AddService;