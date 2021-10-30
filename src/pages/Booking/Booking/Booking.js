import React from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css';
import axios from 'axios';
const Booking = () => {
    const {serviceId} = useParams();
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
console.log(data);

        axios.post('http://localhost:3000/booking', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Tour Confirm');
                reset();
            }
        })
    };
    return (
        <div className="booking">
            <h2>Booking: {serviceId}</h2>
            <h2>place your booking</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="first name" {...register("name", { required: true, maxLength: 20 })} /> 
      <input placeholder="age" type="number" {...register("age", { min: 18, max: 99 })} /> 
      <input placeholder="email" type="email" {...register("email")} />
      <input placeholder="address" type="text" {...register("address")} /> 
      <input type="submit" />
    </form>
        </div>
    );
};

export default Booking;