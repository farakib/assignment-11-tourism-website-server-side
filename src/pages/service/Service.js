import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, title, description, img} = service;
    return (
            
 
    <div className="col">
    <div class="card h-100">
      <img src={img} className="card-img-top h-100" alt="..."/>
      <div className="card-body">
        <h2 className="card-title pb-3">{title}</h2>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <Link to={`/booking/${id}`}>
        <button className="btn btn-primary">Booking sit Now</button>
        </Link>
      </div>
    </div>
  </div>
  

        
    );
};

export default Service;