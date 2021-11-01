import React, { useEffect, useState } from 'react';
import './MyOrder.css'
import useAuth from './../../Hooks/useAuth';



const MyOrder = () => {
    const {user}= useAuth();

    const[tours, setTours]= useState([])
    const [isDeleted ,setIsDeleted] = useState(null)

    useEffect( ()=>{
        fetch('https://fathomless-escarpment-93684.herokuapp.com/manageOrders')
        .then(res=>res.json())
        .then(data=>{
            const result = data.filter(pd=>pd.email==user.email)

            setTours(result);

        })
    } ,[])

    const handleDelete= (id)=>{
        console.log(id);
        fetch(`https://fathomless-escarpment-93684.herokuapp.com/deleteProduct/${id}`,{
            method: "DELETE",
            headers: {"content-type" : "application/json" },
        })
        .then(res=>res.json())
        .then(result=> {
            if(result.deleteCount){
                setIsDeleted(true);
            }
            else{
                setIsDeleted(false);
            }
        })
        console.log(id)

    }
    return (
        <div className="container mb-5" >
            <h2 className="my-5">Your All Orders Here.....</h2>

            <div className="row bg-primary p-1">
                <h5 className="col">Product id</h5>
                <h5 className="col">Product name</h5>
                <h5 className="col">User-email</h5>
                <h5 className="col">Product price</h5>
                <h5 className="col">Action</h5>
                </div>

            {
                tours.map((tour, index)=><div key={tour._id}>
            <div className="row test-start bg-info ">
            <h5 className="col">{tour.example}</h5>
            <h5 className="col">{tour.email}</h5>
            <h5 className="col">$ {tour.price}</h5>
            <button className="col-lg-1" onClick={ ()=>handleDelete(tour._id)}> <i class="fas fa-trash-alt"></i> Cencle</button>
            
            </div>
                    
            </div>)
            }
            
        </div>
    );
};

export default MyOrder;