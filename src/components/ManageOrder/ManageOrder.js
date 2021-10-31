import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
    const[services, setServices]= useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    } ,[])

    const handleDelete= id=>{
        const url = `http://localhost:5000/services/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div >
            <h2 className="my-5">Here Services are manages.....</h2>
            {
                services.map(service=><div key={service._id}>
            <div className="d-flex justify-content-around">
                <p>1</p>
                <h5>nai</h5>
                <h5>{service.name}</h5>
                <h5>{service.price}</h5>
                <h5>nai</h5>
            <button onClick={ ()=>handleDelete(service._id)}>Delete</button>
            </div>
                    
            </div>)
            }
            
        </div>
    );
};

export default ManageOrder;