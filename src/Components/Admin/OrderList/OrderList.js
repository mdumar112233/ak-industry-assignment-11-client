import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const OrderList = () => {
    return (
        <div className='row'>
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10">
                <h3>Thisl is order list</h3>
            </div>
        </div>
    );
};

export default OrderList;