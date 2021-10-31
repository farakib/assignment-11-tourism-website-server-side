import React from 'react';

const manageOrder = (props) => {
    const {name, age, email, address} = props;
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{email}</p>
            <p>{address}</p>
            
        </div>
    );
};

export default manageOrder;