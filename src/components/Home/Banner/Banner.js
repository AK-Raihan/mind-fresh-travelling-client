import React from 'react';
import './banner.css'
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpeg'



const Banner = () => {
    return (
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active banner-carousel ">
            <img src={banner1} className="d-block w-100  " alt="..."/>
            <div className="carousel-caption d-none d-md-block banner-content">
              <button className="btn btn-outline-info">Book Your Trip</button>
              <h1>Where do you want to go?</h1>
              <h3>Trips, experiences, and places. All in one service.</h3>
            </div>
          </div>
          <div className="carousel-item banner-carousel">
            <img src={banner2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block banner-content">
              <button className="btn btn-outline-info">Book Your Trip</button>
              <h1>Enjoy Vacation With Mind Fress Traveling</h1>
              <h3>Travel to the any corner of the world, without going around in circles.</h3>
            </div>
          </div>
          <div className="carousel-item banner-carousel">
            <img src={banner3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block banner-content">
              <button className="btn btn-outline-info">Book Your Trip</button>
              <h1>Mind Fress Traveling is the best option for you!</h1>
              <h3>Find your special tour today</h3>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Banner;