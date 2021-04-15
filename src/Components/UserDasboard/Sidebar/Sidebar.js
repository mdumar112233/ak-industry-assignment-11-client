import React from 'react';
import cart from '../../../image/shopping-cart-empty-side-view.png';
import list from '../../../image/clipboard.png';
import comment from '../../../image/comment.png';
import logo from '../../../image/f9e48bbcf7aca98f0eff903681e84a2b.png';
import './Sidebar.css';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='col-md-2 sidebar-container'>
            <div className="sidebar-title">
                <img src={logo} alt=""/><span>AK INDUSTRY</span>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <img src={cart} alt=""/> <span><Link className='link'>Book</Link></span>
                    </li>
                    <li>
                        <img src={list} alt=""/> <span><Link className='link'>Book List</Link></span>
                    </li>
                    <li>
                        <img src={comment} alt=""/> <span><Link className='link'>Comment</Link></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;