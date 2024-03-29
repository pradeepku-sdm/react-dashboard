import React from "react";
import "./Login.scss";
import auth from "../../../assets/images/auth.jpg"
import logo from "../../../assets/images/logo.png"
import { NavLink } from "react-router-dom"

function Login() {
    return (
        <div className="authentication">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 centerMid">

                        <div>
                            <div className=" mb-5">
                                <img src={logo} alt="" className="logo" />
                            </div>
                            <h1>Welcome</h1>

                            <form action="" className="authForm">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="inputField">
                                            <label htmlFor="">Email</label>
                                            <input type="email" placeholder="Your Email Address" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="inputField">
                                            <label htmlFor="">Password</label>
                                            <input type="password" placeholder="Your Password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12 my-3">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember Me</label>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <button className="btn btn-main">Sign In</button>
                                    </div>
                                    <div className="col-12">
                                        <p>Don't have an account <NavLink to="/signup">Signup</NavLink></p>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={auth} alt="" className="authBg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;