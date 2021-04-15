import React from 'react';
import './ReviewDetail.css';
import star from '../../../image/star.webp';

const ReviewDetail = ({review}) => {
    return (
        <div className='col-md-4 text-center'>
            <div className="review-detail">
                <img src={review.image} alt=""/>
                <h4 className='mt-3 mb-3'>{review.name}</h4>
                <img className='star' src={star} alt=""/>
                <p>{review.description}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;