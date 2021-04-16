import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import OrderListDetail from '../OrderListDetail/OrderListDetail';
import './OrderList.css';

const tableData = [
    {
        name: 'umar faruk',
        email: 'umar@gmail.com',
        service: 'home design',
        pay: 'creadit card',
    }
]

const OrderList = () => {
    return (
        <div className='row'>
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10">
                <div style={{width: '90%'}} className='ms-4 mt-5'>
                    <h3 className='mb-4'>Order List</h3>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Pay with</th>
                            <th>Status</th>
                        </tr>
                    </table>
                    {
                        tableData.map(table => <OrderListDetail table={table}></OrderListDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderList;