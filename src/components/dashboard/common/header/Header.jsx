import React from "react";
import "./Header.scss"
import { IoSearch } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

function Header() {
    return (
        <header>
            <div className="toggle">
                <CiMenuBurger />
            </div>
            <div className="tools">
                <div className="search">
                    <IoSearch />
                    <input type="text" className="form-control" placeholder="Type Here" />
                </div>
                <div className="auth"><FaUser fill="#1f2733" />Sign In</div>
                <div className="icon"><IoSettings fill="#1f2733" /></div>
                <div className="icon"><FaBell fill="#1f2733" /></div>
            </div>
        </header>
    )
}

export default Header;