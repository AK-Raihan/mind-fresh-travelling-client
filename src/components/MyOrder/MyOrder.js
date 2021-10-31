import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MyOrder = () => {
    const { serviceId } = useParams();
    const[service, setService]= useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    } ,[])
    return (
        <div>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">SL</th>
                <th scope="col">Location</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Date</th>
                <th scope="col">delete order</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>nai</td>
                <td>{service.name}</td>
                <td>{service.price}</td>
                <td>nai</td>
                <td><Link>Cencle</Link> </td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default MyOrder;