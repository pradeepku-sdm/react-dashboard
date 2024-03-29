import React, { useState } from "react";
import Sidebar from "./common/sidebar/Sidebar";
import Header from "./common/header/Header";
import "./DashboardPanel.scss";
import DescriptionCard from "../cards/DescriptionCards";
import Form from "../forms/Form";
import Profile from "../profile/Profile";
import { Outlet } from "react-router-dom";

function DashboardPanel() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="main">
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <Header toggle={toggleSidebar} />
            {/* <div className="dashboardContent">
                <Profile />

                <div className="container-fluid mb-4">
                    <div className="row">
                        <div className="col-12">
                            <Form />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <DescriptionCard />
                        </div> <div className="col-md-3">
                            <DescriptionCard />
                        </div>
                        <div className="col-md-3">
                            <DescriptionCard />
                        </div> <div className="col-md-3">
                            <DescriptionCard />
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="dashboardContent p-2">
                <Outlet />
            </div>
        </div>

    )
}

export default DashboardPanel;