import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from 'react-router-dom';
import DashboardPanel from "./components/dashboard/DashboardPanel";
import Login from "./components/auth/login/Login";
import { Signup } from './components/auth/signup/Signup';
import { Homepage } from './components/homepage/Homepage';
import { Notfound } from './components/notfound/Notfound';
import Form from './components/forms/Form';
import Profile from './components/profile/Profile';
import DescriptionCard from './components/cards/DescriptionCards';
import { Charts } from './components/charts/Charts';
import { Pricing } from './components/pricing/Pricing';
import { Transactions } from './components/transactions/Transactions';
import { Report } from './components/reports/Reports';
import Calender from './components/calender/Calender';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='dashboard' element={<DashboardPanel />}>
        <Route path='' element={<Report />}/>
        <Route path='profile' element={<Profile />}/>
        <Route path='form' element={<Form />}/>
        <Route path='cards' element={< DescriptionCard/>}/>
        <Route path='chart' element={< Charts/>}/>
        <Route path='pricing' element={<Pricing />}/>
        <Route path='transaction' element={<Transactions />}/>
        <Route path='calender' element={<Calender />}/>
          </Route>
        <Route path='signup' element={<Signup />}/>
        <Route path='*' element={<Notfound />}/>
      </Routes>    
    </div>
  );
}

export default App;
