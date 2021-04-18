import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import OrderListDetail from '../OrderListDetail/OrderListDetail';
import './OrderList.css';

const OrderList = () => {
    const [tableData, setTableData] = useState([]);
    
    useEffect(() => {
        fetch('https://calm-anchorage-95047.herokuapp.com/allUserData')
        .then(res => res.json())
        .then(data => setTableData(data))
    }, [])
    return (
        <div className='row' style={{width: '100%'}}>
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10">
                <div style={{width: '95%'}} className='ms-4 mt-5'>
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