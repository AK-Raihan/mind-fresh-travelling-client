import React from 'react';
import { useForm } from "react-hook-form";
import './AddTour.css'

const AddTour = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data =>{
        console.log(data)
        fetch('http://localhost:5000/services',{
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
            }
        })
    } 
    return (
        <div className="add-tour">  
        <h2>Please Add a Tour</h2> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" defaultValue="name" {...register("name")} />
                <textarea placeholder="Name" defaultValue="description" {...register("description")} />
                <input placeholder="Price" type="number" {...register("price")} />
                <input placeholder="image url"  {...register("img")} />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddTour;