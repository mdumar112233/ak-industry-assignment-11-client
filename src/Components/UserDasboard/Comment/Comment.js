import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Comment.css';
import ReactStars from "react-rating-stars-component";
import upload from '../../../image/cloud-computing.png';
import axios from 'axios';


const Comment = () => {
    const [review, setReview] = useState({
        name: '',
        service: '',
        description: ''
    })
    const [ratingCount, setRatingCount] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);


    const ratingChanged = (count) => {
        setRatingCount(count)
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        const newInfo = {...review};
        newInfo[e.target.name] = e.target.value;
        setReview(newInfo);
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
        const allReview = {...review, ratingCount, image: imageUrl}
        console.log(allReview);
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(allReview)
        })
        .then(data => {
            console.log('data is uploading');
        })
    }


    return (
        <div className='row'>
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5">
                <h3 className='mb-3 ms-4 '>Review</h3>
                <h5 className='ms-4'>Image</h5>
                <label  className='image-upload ms-4 mb-3' htmlFor="image">
                <span> <img style={{height: '18px', marginTop: '-5px', cursor: 'pointer'}} src={upload} alt=""/></span>   Upload image</label>
                <input onChange={handleImage} id='image' type="file" style={{visibility: 'hidden'}}/> <br/>
                <input onBlur={handleChange} name='name' className='ms-4 w-50' type="text" placeholder='Your name' /><br/>
                <input onBlur={handleChange} name='service' className='mt-3 mb-3 ms-4 w-50' type="text" placeholder='Category of service' /><br/>
                <span className='ms-4'>Rating here:</span><div className='rating'>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
                </div>
                <input onBlur={handleChange} name='description' className='ms-4 w-50' style={{paddingBottom: '50px'}} type="text" placeholder='Description' /> <br/>
                <button onClick={handleSubmit} className='comment-btn'>Submit</button>
            </div>
        </div>
    );
};

export default Comment;
