import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ManageServiceDetail from '../ManageServiceDetail/ManageServiceDetail';


const ManageService = () => {
    const [manageServiceData, setManageServiceData] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-earth-58571.herokuapp.com/serviceData')
        .then(res => res.json())
        .then(data => setManageServiceData(data))
    },[])
    return (
        <div className='row' style={{width: '100%'}}>
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10">
                <h3 className='mt-5 ms-4'>Manage Service</h3>
                <div className="row">
                    {
                        manageServiceData.map(data => <ManageServiceDetail data={data}></ManageServiceDetail>)
                     }
                </div>
            </div>
        </div>
    );
};

export default ManageService;