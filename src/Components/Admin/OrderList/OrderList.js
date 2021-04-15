import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const OrderList = () => {
    return (
        <div className='row'>
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10">
                <h3>Order List</h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Pay with</th>
                        <th>Status</th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default OrderList;