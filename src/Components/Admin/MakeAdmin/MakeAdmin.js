import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './MakeAdmin.css';

const MakeAdmin = () => {

    return (
        <div className='row'>
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10">
                <div className="mt-5 ms-4">
                    <h3>Make Admin</h3>
                    <label className='mt-3' htmlFor="">Email</label> <br/>
                    <input onBlur={handleAdmin} type="email" placeholder='Enter your email'/> <input className='make-admin-btn' type="submit" value='Submit'/>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;