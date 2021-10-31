import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    useEffect(()=>{
        fetch('https://dreadful-spider-06706.herokuapp.com//users')
        .then(res => res.json())
        .then(data=> setManageOrders(data));
    }, [])
    return (
        <div>
            <h2>orders: {manageOrders}</h2>
            {
                manageOrders.map(manageOrder => <manageOrder
                key={manageOrder._id}
                manageOrder={manageOrder}
                ></manageOrder>)
            }
        </div>
    );
};

export default ManageOrders;