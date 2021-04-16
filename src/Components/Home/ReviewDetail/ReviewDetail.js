import React from 'react';
import './ReviewDetail.css';
import ReactStars from "react-rating-stars-component";

const ReviewDetail = ({review}) => {
    return (
        <div className='col-md-4 text-center'>
            <div className="review-detail">
                <img src={review.image} alt=""/>
                <h4 className='mt-3 mb-2'>{review.name}</h4>
                    <div style={{marginLeft: '120px'}}>
                        <ReactStars
                        size={24}
                        value={review.ratingCount}
                        edit={false}
                        activeColor="#ffd700"
                        />
                    </div>
                <p>{review.description}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;