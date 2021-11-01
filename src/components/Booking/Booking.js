import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from './../../Hooks/useAuth';

const Booking = () => {
    const {user}=useAuth();
    const { register, handleSubmit, reset} = useForm();
    const { serviceId } = useParams();
    const[service, setService]= useState({})

    const history = useHistory();
    // const location = useLocation();

    const url =  '/myOrder';

    const onSubmit = data =>{
        console.log(data);

        fetch(`https://fathomless-escarpment-93684.herokuapp.com/services/${serviceId}`,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert('added successfully')
                reset()
                history.push(url);
            }
        })
        
    } 

    useEffect(()=>{
        fetch(`https://fathomless-escarpment-93684.herokuapp.com/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    } ,[]);
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                    <div>
                        <img src={service.img} alt="" />
                        
                        <h2>price: {service.price}</h2>
                        <h3>tour place: {service.name}</h3>
                        <p>tour place: {service.description}</p>
                    </div>
                    </div>
                    <div className="col-lg-6">
                <div className="order-form">
                <h2>Your Booking Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input  defaultValue={user.displayName} {...register("name")} />
                    <input  defaultValue={user.email} {...register("email")} />
                    <input  defaultValue={service.name} {...register("example")} />
                    <input  defaultValue={ serviceId} {...register("_id")} />
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