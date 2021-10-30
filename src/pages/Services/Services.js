import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/farakib/banner-images/main/service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
           {
               services.map(service => <Service
                key={service.id}
                service={service}
               ></Service>)
           }
           
        </div>
    );
};

export default Services;