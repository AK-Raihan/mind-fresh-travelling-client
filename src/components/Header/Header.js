import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
            <a className="navbar-brand fs-2 fw-bold text-primary" href="/"> <span><i class="fas fa-trailer"></i></span> Mind Fress Traveling</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link " aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link" to="/about">About</NavLink>
                </li>
                    <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link" to="/depertment">Depertment</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>
            <div className="d-flex justify-content-between">
                <h2>hello</h2>
            </div>
            </div>
        </div>
        </nav>
    );
};

export default Header;