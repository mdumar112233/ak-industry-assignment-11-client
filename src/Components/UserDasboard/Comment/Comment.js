import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Comment.css';
import ReactStars from "react-rating-stars-component";

const Comment = () => {
    const [review, setReview] = useState({
        name: '',
        service: '',
        description: ''
    })
    const [ratingCount, setRatingCount] = useState(null);

    const ratingChanged = (count) => {
        setRatingCount(count)
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        const newInfo = {...review};
        newInfo[e.target.name] = e.target.value;
        setReview(newInfo);
    }
    const handleSubmit = () => {
        const allReview = {...review, ratingCount}
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