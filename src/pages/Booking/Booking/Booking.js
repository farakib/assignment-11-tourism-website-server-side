import React, { useRef } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css';
import axios from 'axios';
import Services from '../../Services/Services';
const Booking = () => {
    const {serviceId} = useParams();
    const { register, handleSubmit, reset } = useForm();

    const nameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();
    const addressRef = useRef();


    const handleUsers = (e) => {

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const age = ageRef.current.value;
        const address = addressRef.current.value;

        const newUser = {name, email, age, address};

        fetch('http://localhost:5000/users', {
            method: 'POST',
           headers: {
             'content-type': 'application/json'
         },
        body: JSON.stringify(newUser)
        })

        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                alert('confirm your tour')
                e.target.reset();
            }
        })
        e.preventDefault();
    };
    return (
        <div className="booking">
            <h2>Booking:{serviceId}</h2>
            <h2>place your booking</h2>
    <form onSubmit={handleUsers}>
      <input placeholder="first name" ref={nameRef} {...register("name", { required: true, maxLength: 20 })} /> 
      <input placeholder="age" ref={ageRef} type="number" {...register("age", { min: 18, max: 99 })} /> 
      <input placeholder="email" ref={emailRef} type="email" {...register("email")} />
      <input placeholder="address" ref={addressRef} type="text" {...register("address")} /> 
      <input type="submit" />
    </form>
        </div>
    );
};

export default Booking;