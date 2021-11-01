import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{_id, name, img, description, price}=props.service;
    return (
        <div className="col ">
        <div className="card p-3 img-card tour-card">
          <div className=" card-image"><img src={img} className="card-img-top figure-img img-fluid " alt="..."/></div>
          <div className="card-body card-text">
            <h2 className="card-title">{name} </h2>
            <h4 className="card-text text-info">${price} </h4>
            <p className="card-text">{description} </p>
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-lg btn-outline-info">Book Your Tour</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;