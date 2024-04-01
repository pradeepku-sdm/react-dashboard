import React from "react";
import "./Profile.scss";
import profile from "../../assets/images/profile.jpg";
import { FaBoxOpen } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";

function Profile() {
    return(
        <>
         <div className="container-fluid">
        <div className="row">
            <div className="col-12 mb-4">
                <div className="profileHeader">
                    <div className="userInfo">
                        <img src={profile} alt="" />

                        <div className="detail">
                            <h5>Esthera Jackson</h5>
                            <h4>esthera@simmmple.com</h4>
                        </div>
                    </div>
                    <div className="tabs">
                        <div className="tabItem active"><FaBoxOpen />Overview</div>
                        <div className="tabItem"><RiTeamFill />Teams</div>
                        <div className="tabItem"><AiFillProject />Project</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row profileDetails">
            <div className="col-xl-4 col-md-6 mb-4">
                <div className="card">
                    <h3>Platform Settings</h3>

                    <div className="toggleSection">
                        <h4>ACCOUNT</h4>
                        <div className="toggleList">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
                            </div> <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked2" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked2">Checked switch checkbox input</label>
                            </div> <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked3" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked3">Checked switch checkbox input</label>
                            </div> <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked4" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked4">Checked switch checkbox input</label>
                            </div>
                        </div>
                    </div>
                    <div className="toggleSection">
                        <h4>APPLICATION</h4>
                        <div className="toggleList">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
                            </div> <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked2" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked2">Checked switch checkbox input</label>
                            </div> <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked3" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked3">Checked switch checkbox input</label>
                            </div> <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked4" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked4">Checked switch checkbox input</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
                <div className="card">
                    <h3>Profile Information</h3>
                    <p>Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                    <div className="details">
                        <p><span>Full Name:</span>Esthera Jackson</p>
                        <p><span>Mobile:</span>(44) 123 1234 123</p>
                        <p><span>Email:</span>esthera@simmmple.com</p>
                        <p><span>Location:</span>United States</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 mb-4">
                <div className="card">
                    <h3>Conversations</h3>
                    <div className="conversationList">
                        <div className="listItem">
                            <div className="profile">
                                <img src={profile} alt="" />
                                <div className="desc">
                                    <div className="name">Sophie B.</div>
                                    <div className="message">Hi! I need more information about the recent changes</div>
                                </div>
                            </div>
                            <div className="replay">
                                <a href="">REPLAY</a>
                            </div>
                        </div> <div className="listItem">
                            <div className="profile">
                                <img src={profile} alt="" />
                                <div className="desc">
                                    <div className="name">Sophie B.</div>
                                    <div className="message">Hi! I need more information about the recent changes</div>
                                </div>
                            </div>
                            <div className="replay">
                                <a href="">REPLAY</a>
                            </div>
                        </div> <div className="listItem">
                            <div className="profile">
                                <img src={profile} alt="" />
                                <div className="desc">
                                    <div className="name">Sophie B.</div>
                                    <div className="message">Hi! I need more information about the recent changes</div>
                                </div>
                            </div>
                            <div className="replay">
                                <a href="">REPLAY</a>
                            </div>
                        </div> <div className="listItem">
                            <div className="profile">
                                <img src={profile} alt="" />
                                <div className="desc">
                                    <div className="name">Sophie B.</div>
                                    <div className="message">Hi! I need more information about the recent changes</div>
                                </div>
                            </div>
                            <div className="replay">
                                <a href="">REPLAY</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
        </>
    ) 
   
}
export default Profile;