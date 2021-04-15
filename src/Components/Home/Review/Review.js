import React from 'react';
import manOne from '../../../image/man 1.webp';
import manTwo from '../../../image/man 2.webp';
import manThree from '../../../image/man 3.webp';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Review.css';

const reviewDetail = [
    {
        name: 'umar faruk',
        image: manOne,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque!', 
    },
    {
        name: 'rofik kahn',
        image: manTwo,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque!'
    },
    {
        name: 'sohel akbar',
        image: manThree,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque!'
    }
]

const Review = () => {
    return (
        <div className='container' style={{height: '500px'}}>
            <div className="main-title text-center">
                <h3>User Review</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque!</p>
                </div>

                <div className="d-flex justify-content-center">
                    <div className='row mt-5'>
                        {
                            reviewDetail.map(review => <ReviewDetail review={review}></ReviewDetail>)
                        }
                    </div>
                </div>
        </div>
    );
};

export default Review;