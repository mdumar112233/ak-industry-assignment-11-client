import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';
import './Admin.css';

const Admin = () => {
    const [loggedInUser, serLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([]);
    console.log(admin);

    useEffect(() => {
        fetch('https://murmuring-earth-58571.herokuapp.com/getAdmin')
        .then(res => res.json())
        .then(data => setAdmin(data))
    }, [])
    
    const email = admin.find(admin => loggedInUser.email === admin.email);

    return (
        <div>
            {
                email ? <OrderList></OrderList> : <h3 className='manage-admin'>This page only  admin can access</h3>
            }
        </div>
    );
};

export default Admin;