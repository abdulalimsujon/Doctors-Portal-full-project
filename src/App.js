import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Shared/Login/Login';
import Appoinment from './Pages/Appointment/Appoinment';
import SignUp from './Pages/Shared/Login/SignUp';
import RequireAuth from './Pages/Shared/Login/RequireAuth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div class='max-w-7xl mx-auto'>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appoinment>
            </Appoinment>
          </RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>




      <ToastContainer />
    </div>
  );
}

export default App;
