import React from 'react';
import './OrderListDetail.css';
import dropDown from '../../../image/down-filled-triangular-arrow.png';

const OrderListDetail = ({table}) => {
    return (
        <div>
            <table>
                <tr>
                    <td>{table.name}</td>
                    <td>{table.email}</td>
                    <td>{table.service}</td>
                    <td>{table.pay}</td>
                    <td className='table-status'>
                        <div className='d-flex'>
                        <div>
                            <form>
                                <select name="" id="">
                                    <option value="Start">Start</option>
                                    <option value="Panding">Panding</option>
                                    <option value="Done">Done</option> 
                                </select> 
                            </form>
                        </div>
                        <div>
                            <img style={{height: '14px', marginRight:'7px'}} src={dropDown} alt=""/>
                        </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default OrderListDetail;