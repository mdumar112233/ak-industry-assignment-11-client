import React from 'react';
import './ManageServiceDetail.css';

const ManageServiceDetail = ({data}) => {
    console.log(data._id);

    const handleDelete = (e) => {
        const id = data._id;
        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                e.target.parentNode.style.display = 'none';
            }
        })
    }

    return (
        <div className='col-md-4'>
            <div style={{height:'auto'}} className="service mt-3 text-center">
                <div className="img-option">
                    <div>
                        <img src={data.image} alt=""/>
                    </div>
                </div>
                <h5 className='mt-4 mb-3'>{data.name}</h5>
                <p>{data.description}</p>
                <button onClick={handleDelete} className='delete-btn'>Delete</button>
            </div>
        </div>
    );
};

export default ManageServiceDetail;