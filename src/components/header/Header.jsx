import React, { useState } from "react";
import "./Header.scss"
import { IoSearch } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import Profile from "../../assets/images/profile.jpg";
import { NavLink } from "react-router-dom";

const Header = ({ toggle }) => {

    return (
        <header>
            <div >
                <div className="toggle d-xl-none d-block" onClick={toggle}>
                    <CiMenuBurger />

                </div>
            </div>
            <div className="tools">
                <div className="dropup-center dropdown">
                    <div className="icon cursor-pointer" data-bs-toggle="dropdown" aria-expanded="false"><FaBell fill="#1f2733" /></div>
                    <ul className="dropdown-menu p-0 mt-3">
                        <div className="card p-0 shadow ">
                            <div className="card-header fw-bold">Notifications</div>
                            <li><a className="dropdown-item" href="#">Lorem ipsum dolor sit amet.</a></li>
                            <li><a className="dropdown-item" href="#">Lorem ipsum dolor sit amet consectetur.</a></li>
                            <li><a className="dropdown-item" href="#">Lorem, ipsum dolor.</a></li>
                            <div className="card-footer"><NavLink>View All</NavLink> </div>

                        </div>
                    </ul>
                </div>
                <div className="search">
                    <IoSearch />

                    <input type="text" className="form-control" placeholder="Type Here" />
                </div>
                <div className="dropdown">
                    <div className="auth dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="profile">
                            <div className="img">
                                <img src={Profile} alt="" />
                            </div>
                            <div className="name">John William</div>
                        </div>
                    </div>

                    <ul className="dropdown-menu mt-2 shadow" aria-labelledby="dropdownMenuButton1">
                        <li> <NavLink className="dropdown-item" to="profile">Profile</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/">Settings</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/">Logout</NavLink></li>
                    </ul>
                </div>

            </div>
        </header>
    )
}

export default Header;


// <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//     <div className="modal-dialog">
//         <div className="modal-content">
//             <div className="modal-header">
//                 <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//                 ...
//             </div>
//             <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                 <button type="button" className="btn btn-primary">Understood</button>
//             </div>
//         </div>
//     </div>
// </div>