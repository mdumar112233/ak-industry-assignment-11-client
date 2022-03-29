import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Review.css';


const Review = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-earth-58571.herokuapp.com/reviewData')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
        <div className='container review-container' style={{height: '500px'}}>
            <div className="main-title text-center">
                <h2 style={{fontFamily: "'Bebas Neue', cursive", letterSpacing: '2px', wordSpacing: '2px', fontSize:'40px'}}>User Review</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque!</p>
                </div>

                <div className="d-flex flex-column">
                    <div className='row mt-5 ms-4'>
                        {
                            review.map(review => <ReviewDetail review={review}></ReviewDetail>)
                        }
                    </div>
                </div>
        </div>
    );
};

export default Review;