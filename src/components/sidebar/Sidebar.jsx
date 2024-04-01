import React from "react";
import "./Sidebar.scss"
import Logo from "../../assets/images/logo.png";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
    return (
        <section className={isSidebarOpen ? 'sidebar toggle' : 'sidebar'}>
            <div className="logo">
                <img src={Logo} alt="" />
                <div className="line"></div>
            </div>
            <div className="pageList">
                <div className="listItem">
                    <ul>
                       <li> <NavLink to="dashboard"> Dashboard </NavLink></li>
                        <li><NavLink to="profile">Profile </NavLink></li>
                        <li><NavLink to="form">Form</NavLink></li>
                        <li><NavLink to="cards">Cards</NavLink></li>
                        <li><NavLink to="chart">Charts</NavLink></li>
                        <li><NavLink to="pricing">Pricing</NavLink></li>
                       <li><NavLink to="transaction">Transaction</NavLink></li>
                        <li><NavLink to="calender">Calender</NavLink></li>
                        <li className="accordion-box">
                        <div className="accordion-item">
                            <a className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <div className="icon"><FaUser fill="#4FD1C5" /></div>   Authentication
                                </button>
                            </a>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>item 1</li>
                                        <li>item 2</li>
                                        <li>item 3</li>
                                        <li>item 4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    </ul>
                </div>
               
            </div>
        </section>
    )
}

export default Sidebar;