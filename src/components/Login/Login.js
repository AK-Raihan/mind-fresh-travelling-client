import React from 'react';
import useFirebase from './../../Hooks/useFirebse';

const Login = () => {
    const{user, signInUsingGoogle, logOut} = useFirebase();
    return (
<div>
            <div className="row py-5">
                <h1 className="text-white"> Please login</h1>
                <div className="col-lg-4"></div>
                <div className="col-lg-4 card p-5">
                <form className="p-3 ">
                <div className="mb-3">
                    <input  type="email" className="form-control" placeholder="email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="password" />
                </div>
            </form>
            <hr />
            <h1>or</h1>
            <hr />
            {
                    user.email ?
                        <div className="d-flex justify-content-center align-items-center">
                            <button className="btn btn-info" onClick={logOut}>logout</button>
                        </div>
                        :
                        <button onClick={signInUsingGoogle}  type="submit" className="btn btn-secondary"><span><i class="fab fa-google text-info fs-5"></i></span> Login with Google</button>
                }
            </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

export default Login;