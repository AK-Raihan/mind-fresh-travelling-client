import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageOrder.css';


const ManageOrder = () => {
    const[tours, setTours]= useState([])
    const [isDeleted ,setIsDeleted] = useState(null)

    useEffect( ()=>{
        fetch('https://fathomless-escarpment-93684.herokuapp.com/manageOrders')
        .then(res=>res.json())
        .then(data=>setTours(data))
    } ,[])

    const handleDelete= (id)=>{
        console.log(id)
        const proceed = window.confirm("Are you sure , you want to delete?");
        if(proceed){
            fetch(`https://fathomless-escarpment-93684.herokuapp.com/deleteProduct/${id}`,{
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(result=> {
                if(result.deleteCount){
                    alert("Deleted Successfully");
                    const remaining = tours.filter(tour=>tour?._id !==id);
                    setTours(remaining);
                }
            })
        }

        console.log(id)

    }
    return (
        <div className="container py-5 mb-0" >
            <h2 className="my-5">Your All Orders Here.....</h2>

            <div className="row bg-primary p-1">
                <h5 className="col">Product id</h5>
                <h5 className="col">Product name</h5>
                <h5 className="col">User-email</h5>
                <h5 className="col">Product price</h5>
                <h5 className="col">Action</h5>
                </div>

            {
                tours.map((tour)=><div key={tour?._id}>
            <div className="row test-start bg-info ">
            <h5 className="col">{tour.example}</h5>
            <h5 className="col">{tour.email}</h5>
            <h5 className="col">$ {tour.price}</h5>
            <button className="col-lg-1 mb-2" onClick={ ()=>handleDelete(tour?._id)}> <i class="fas fa-trash-alt"></i> Cencle</button>
            
            </div>
                    
            </div>)
            }
            
        </div>
    );
};

export default ManageOrder;