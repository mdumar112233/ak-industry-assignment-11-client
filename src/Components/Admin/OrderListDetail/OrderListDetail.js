import React from 'react';
import './OrderListDetail.css';
import dropDown from '../../../image/down-filled-triangular-arrow.png';

const OrderListDetail = ({table}) => {
    console.log(table._id);
    const handleOption = (e) =>{
        const status = {status: e.target.value}
        console.log(e.target.value)
        console.log(status)
        fetch(`https://calm-anchorage-95047.herokuapp.com/update/${table._id}`, {
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(status)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <table>
                <tr>
                    <td>{table.name}</td>
                    <td>{table.email}</td>
                    <td>{table.service}</td>
                    <td>Creadit Card</td>
                    <td className='table-status'>
                        <div className='d-flex'>
                        <div>
                            <form>
                                <select name="" id="">
                                    <option  onClick={handleOption} value="Start">Start</option>
                                    <option  onClick={handleOption} value="Panding">Panding</option>
                                    <option  onClick={handleOption} value="Done">Done</option> 
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