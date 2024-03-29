import React from "react";
import "./Signup.scss";
import auth from "../../../assets/images/auth.jpg";
import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export const Signup = () => {
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
                                            <label htmlFor="">Name</label>
                                            <input type="text" name="" id="" placeholder="Name" className="form-control" />
                                        </div>
                                    </div>  <div className="col-12">
                                        <div className="inputField">
                                            <label htmlFor="">Email</label>
                                            <input type="email" name="" id="" placeholder="Your Email Address" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="inputField">
                                            <label htmlFor="">Password</label>
                                            <input type="password" name="" id="" placeholder="Your Password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12 my-3">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember Me</label>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <button className="btn btn-main">Sign Up</button>
                                    </div>
                                    <div className="col-12">
                                        <p>Already have an account? <NavLink to="/login">Sign In</NavLink></p>
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
