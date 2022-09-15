import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Shared/Login/Login';
import Appoinment from './Pages/Appointment/Appoinment';




function App() {
  return (
    <div class='max-w-7xl mx-auto'>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appoinment></Appoinment>} />
        <Route path="login" element={<Login />} />
      </Routes>


    </div>
  );
}

export default App;
