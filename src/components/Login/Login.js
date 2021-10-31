import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Login = () => {
    const{user, signInUsingGoogle, logOut} = useAuth();
    return (
<div>
            <div className="row py-5">
                <h1 className="text-white"> Please login</h1>
                <div className="col-lg-4"></div>
                <div className="col-lg-4 card p-5">
                    <h3>Login to proceed and enjoy your time.</h3>
            <hr />
            <p> click down</p>
            <hr />
                <button onClick={signInUsingGoogle}  type="submit" className="btn btn-secondary"><span><i className="fab fa-google text-info fs-5"></i></span> Login with Google</button>
                </div>

                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

export default Login;







    // user.email ?
    //     <Link to="/placeOrder" className="d-flex justify-content-center align-items-center">
    //         <button className="btn btn-info" >Proceed</button>
    //     </Link>
    //     :
    //     <button onClick={signInUsingGoogle}  type="submit" className="btn btn-secondary"><span><i className="fab fa-google text-info fs-5"></i></span> Login with Google</button>
