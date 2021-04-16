import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import map from '../../../image/sketch.png';
import ManageServiceDetail from '../ManageServiceDetail/ManageServiceDetail';


const ManageServiceData = [
    {
        name: 'Construction Map',
         image: map,
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto'
    }
]

const ManageService = () => {
    return (
        <div className='row'>
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10">
                <h3 className='mt-5 ms-4'>Manage Service</h3>
                {
                    ManageServiceData.map(data => <ManageServiceDetail data={data}></ManageServiceDetail>)
                }
            </div>
        </div>
    );
};

export default ManageService;