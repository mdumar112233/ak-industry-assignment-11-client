import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});
    console.log(admin);
    const handleChange = (e) => {
        const newInfo = {...admin};
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);
    }

    const handleAdmin = (e) => {
        const adminData = {...admin};
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(adminData)
        })
        .then(data => {
            console.log('admin addedd');
        })
        e.preventDefault();
    }

    return (
        <div className='row'  style={{width: '100%'}}>
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10">
                <div className="mt-5 ms-4">
                    <h3>Make Admin</h3>
                    <form action="">
                    <label className='mt-3 mb-2' htmlFor="">Email</label> <br/>
                    <input onBlur={handleChange} type="email" name='email' placeholder='Enter your email' required/> <input onClick={handleAdmin} className='make-admin-btn' type="submit" value='Submit'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;