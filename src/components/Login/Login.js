import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getAuth,
    signInWithPopup,
    GoogleAuthProvider,
   } from "firebase/auth";

const Login = (props) => {
    // const{_id, name, img, description, price}=props.service;


    const [user, setUser]= useState({});
    const [error, setError]= useState('');
    const[isloading, setIsLoading]= useState(true);

    const history = useHistory();
    const location = useLocation();

    const url = location.state?.from || '/home'
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle= ()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          setUser(result.user);

          history.push(url);
          // console.log(result.user);
          setError("");
        })
        .finally(() => setIsLoading(false));
    }
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
