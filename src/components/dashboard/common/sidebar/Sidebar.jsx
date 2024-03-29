import React from "react";
import "./Sidebar.scss"
import Logo from "../../../../assets/images/logo.png";
// import { FaHome } from "react-icons/fa";
// import { FaToolbox } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
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
                        <NavLink to=""> <li>Dashboard </li></NavLink>
                        <NavLink to="profile"><li>Profile </li></NavLink>
                        <NavLink to="form"><li>Form</li></NavLink>
                        <NavLink to="cards"><li>Cards</li></NavLink>
                        <NavLink to="chart"><li>Charts</li></NavLink>
                        <NavLink to="pricing"><li>Pricing</li></NavLink>
                        <NavLink to="transaction"><li>Transaction</li></NavLink>
                        <NavLink to="calender"><li>Calender</li></NavLink>
                    </ul>
                </div>
                {/* <ul className="accordion" id="accordionExample">
                    <li className="accordion-box">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <div className="icon"><FaHome fill="#4FD1C5" /></div> Dashboard
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li><NavLink to="">Dashboard</NavLink> </li>
                                        <li><NavLink to="profile">Profile</NavLink> </li>
                                        <li><NavLink to="form">Form</NavLink> </li>
                                        <li><NavLink to="cards">Cards</NavLink> </li>
                                        <li><NavLink to="chart">Charts</NavLink> </li>
                                        <li><NavLink to="pricing">Pricing</NavLink> </li>
                                        <li><NavLink to="transaction">Transaction</NavLink> </li>
                                        <li><NavLink to="calender">Calender</NavLink> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="accordion-box">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <div className="icon"><FaToolbox fill="#4FD1C5" /></div>   Components
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
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
                    <li className="accordion-box">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <div className="icon"><FaUser fill="#4FD1C5" /></div>   Authentication
                                </button>
                            </h2>
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
                </ul> */}
            </div>
        </section>
    )
}

export default Sidebar;