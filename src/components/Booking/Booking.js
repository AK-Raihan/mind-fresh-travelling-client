import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css'

const Booking = () => {
    const { register, handleSubmit, reset} = useForm();
    const { serviceId } = useParams();
    const[service, setService]= useState({})

    const onSubmit = data =>{
        console.log(data);
    } 

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    } ,[])
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                    <div>
                        <img src={service.img} alt="" />
                        <h2>this is booking: {serviceId}</h2>
                        <h2>price: {service.price}</h2>
                        <h3>tour place: {service.name}</h3>
                        <p>tour place: {service.description}</p>
                    </div>
                    </div>
                    <div className="col-lg-6">
                <div className="order-form">
                <h2>Your Order Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  defaultValue={service.name} {...register("name")} />
                    <input  defaultValue={serviceId} {...register("_id")} />
                    <input defaultValue={service.price}  {...register("price")} />
                    <input placeholder="phone number" type="text"  {...register("phone")} />
                    <textarea placeholder="comment" {...register("comment")} />
                    
                    <input type="submit" />
            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;