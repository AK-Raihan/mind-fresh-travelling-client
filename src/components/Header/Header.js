import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebse from './../../Hooks/useFirebse';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const{user, logOut, signInUsingGoogle}=useFirebse()
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
            <a className="navbar-brand fs-3 fw-bold text-info" href="/"> <span className="logo-img"><img  src={logo} alt="" /></span> Mind Fresh Travelling</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link " aria-current="page" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link" to="/booking">Booking</NavLink>
                </li>
 
                <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>

            <div className="d-flex justify-content-between">

                {
                    user.email ?
                        <div className="d-flex justify-content-center align-items-center">
                            <span>Hello <span className="fw-bold text-info">{user.displayName}</span> </span>
                            <div className=""><img className="rounded-circle w-50" src={user.photoURL} alt="" /></div>

                            <div className="dropdown">
                                <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/myOrder">My Order</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/manageOrder">Manage Order</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/addTour">Add New tour</NavLink>
                                    </li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <button className="btn btn-info ms-2" onClick={logOut}>Logout</button>
                                </ul>
                            </div>
                        </div>
                        :
                        <button onClick={signInUsingGoogle}  type="submit" className="btn btn-secondary"><span><i className="fab fa-google text-info fs-5"></i></span> Login with Google</button>
                }
            </div>

            </div>
        </div>
        </nav>
    );
};

export default Header;