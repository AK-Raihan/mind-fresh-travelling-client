import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import img from '../../images/payment-gateway.jpg'

const Footer = () => {
    return (
        <div className="footer text-white py-5 mb-0 ">
            <div className="container">
            <div className="row">
                <div className="col-lg-4 ">
                    <div>
                    <div>
                    <a className="navbar-brand fs-2 fw-bold text-primary" href="/"> <span><i className="fas fa-trailer"></i></span> Mind Fresh Travelling</a>
                    </div>
                    <p className="text-white">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    <hr />
                    </div>
                    <div>
                        <h5>Reach Out</h5>
                        <ul className=" list-unstyled">
                        <li className="text-white"><i className="fas fa-map-marker-alt "></i> BHA gate oposite position,22</li>
                        <li className="text-white"><i className="fas fa-phone-volume"></i> +24 123-456-7878</li>
                        <li className="text-white"><i className="far fa-envelope"></i> info@example.com</li>
                        </ul>
                    </div>


                </div>
                <div className="col-lg-4 text-center ">
                    <div>
                    <h5>Useful Link</h5>
                    <li> <Link> Book Appoitment</Link></li>
                    <li> <Link>View tour place</Link></li>
                    <li> <Link>Our Locations</Link></li>
                    <li> <Link>members On Panel</Link></li>
                    <li> <Link>Facilities Available</Link></li>
                    <li> <Link>About tour</Link></li>
                    <li> <Link>Tour Rules</Link></li>
                    </div>

                    <h5>Social contact</h5>
                    <div className="social-menu d-flex list-unstyled justify-content-center">                  
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-twitter-square"></i></li>
                        <li><i className="fab fa-instagram-square"></i></li>
                        <li><i className="fab fa-linkedin"></i></li>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div>
                        <h5>Subscribe Newsletter</h5>
                        <p>Subscribe to our newsletter for new tourst place</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="find a favourite place" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                    <div>
                        <h5>Payment Accepted</h5>
                        <span><img className="w-75" src={img} alt="" /></span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;