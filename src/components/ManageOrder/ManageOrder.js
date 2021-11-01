import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageOrder.css'


const ManageOrder = () => {
    const[tours, setTours]= useState([])
    const [isDeleted ,setIsDeleted] = useState(null)

    useEffect( ()=>{
        fetch('http://localhost:5000/manageOrders')
        .then(res=>res.json())
        .then(data=>setTours(data))
    } ,[isDeleted])

    const handleDelete= (id)=>{
        console.log(id);
        fetch(`http://localhost:5000/deleteProduct/${id}`,{
            method: "DELETE",
            headers: {"content-type" : "application/json" },
        })
        .then(res=>res.json())
        .then(result=> {
            if(result.deleteCount>0){
                setIsDeleted(true);
            }
            else{
                setIsDeleted(false);
            }
        })
        console.log(id)

    }
    return (
        <div >
            <h2 className="my-5">Here tours are manages.....</h2>
            {
                tours.map((tour, index)=><div key={tour._id}>
            <div className="d-flex justify-content-around">
                <div className="product-id">
                    <h5 className="heading">Product id</h5>
                    <p className="content">{tour._id}</p>
                </div>
                <div className="product-name">
                    <h5 className="heading">Product name</h5>
                    <p className="content">{tour.example}</p>
                </div>
                <div className="user-email">
                    <h5 className="heading">User-email</h5>
                    <p className="content">{tour.email}</p>
                </div>
                <div className="product-price">
                    <h5 className="heading">Product price</h5>
                    <p className="content">$ {tour.price}</p>
                </div>
                <div className="delete-button">
                    <h5 className="heading">Action</h5>
                    <button className="content" onClick={ ()=>handleDelete(tour._id)}> <i class="fas fa-trash-alt"></i> Cencle</button>
                </div>
            </div>
                    
            </div>)
            }
            
        </div>
    );
};

export default ManageOrder;