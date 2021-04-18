import React from 'react';
import './Blog.css';
import blog1 from '../../../image/blog1.jpg';
import blog2 from '../../../image/blog2.webp';
import blog3 from '../../../image/blog3.webp';

const Blog = () => {
    return (
        <div className='container blog-container'>
            <div className="text-center mb-5">
            <h2 className='mb-4' style={{fontFamily: "'Bebas Neue', cursive", letterSpacing: '2px', wordSpacing: '2px', fontSize:'40px'}}>Recent Blog</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, fugiat ullam sapiente fuga commodi et.</p>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 blog-card">
                <div class="card" style={{width: '18rem'}}>
                        <img src={blog1} alt=""/>
                        <div class="card-body">
                        <h5 class="card-title">Heavy Construction</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='card-btn'>Go somewhere</button>
                        </div>
                    </div>
                </div>  
                    <div className="col-md-4  blog-card">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={blog2} alt=""/>
                        <div class="card-body">
                        <h5 class="card-title">New Build</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='card-btn'>Go somewhere</button>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4  blog-card">
                    <div class="card" style={{width: '18rem'}}>
                        <img src={blog3} alt=""/>
                        <div class="card-body">
                        <h5 class="card-title">Heigh Quality</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='card-btn'>Go somewhere</button>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Blog;