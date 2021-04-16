import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import list from '../../../image/clipboard.png';
import add from '../../../image/plus.png';
import addUser from '../../../image/add-friend.png';
import manage from '../../../image/add.png';
import logo from '../../../image/f9e48bbcf7aca98f0eff903681e84a2b.png';




const AdminSidebar = () => {
    const history = useHistory();
    const handleHome = () => {
        history.push('/')
    }
    return (
        <div className='col-md-2 sidebar-container'>
            <div style={{cursor: 'pointer'}} className="sidebar-title" onClick={handleHome}>
                <img src={logo} alt=""/><span>AK INDUSTRY</span>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <img src={list} alt=""/>  <span><Link className='link' to='/order'>Order List</Link></span>
                    </li>
                    <li>
                        <img src={add} alt=""/> <span><Link className='link' to='/addService'>Add Service</Link></span>
                    </li>
                    <li>
                        <img src={addUser} alt=""/> <span><Link className='link' to='/addAdmin'>Make Admin</Link></span>
                    </li>
                    <li>
                        <img src={manage} alt=""/> <span><Link className='link' to='/manageService'>Manage Service</Link></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AdminSidebar;