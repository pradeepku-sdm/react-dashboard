import React, { useState } from "react";
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from 'react-router-dom';
import DashboardPanel from "./components/dashboard/common/DashboardPanel";
import Login from "./components/auth/login/Login";
import { Signup } from './components/auth/signup/Signup';
import { Homepage } from './components/homepage/Homepage';
import { Notfound } from './components/notfound/Notfound';
import Form from './components/forms/Form';
import Profile from "./components/profile/Profile";
import DescriptionCard from './components/cards/DescriptionCards';
import { Charts } from './components/charts/Charts';
import { Pricing } from './components/pricing/Pricing';
import { Transactions } from './components/transactions/Transactions';
import { Report } from './components/reports/Reports';
import Calender from './components/calender/Calender';
import { Outlet } from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div>

      <div className="main">


        <Sidebar isSidebarOpen={isSidebarOpen} />
        <Header toggle={toggleSidebar} />
        <div className="dashboardContent p-2">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='dashboard' element={<Report />} />
            {/* <Route path='' element={<Report />}/> */}
            <Route path='profile' element={<Profile />} />
            <Route path='form' element={<Form />} />
            <Route path='cards' element={< DescriptionCard />} />
            <Route path='chart' element={< Charts />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='transaction' element={<Transactions />} />
            <Route path='calender' element={<Calender />} />

            <Route path='signup' element={<Signup />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
          <Outlet />
        </div>

      </div>

    </div>

  );
}

export default App;
