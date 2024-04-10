import React, { useState } from 'react';
import './style.css'; // Import your CSS file
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './Components/Login&register/Login';
import Home from './Components/Homepage/Home';
import Booking from './Components/Booking/Booking';
import Map from './Components/Map/Map';
import Hotel from './Components/Hotel/Hotel';
import Forts from './Components/Forts/Forts';
import Attraction from './Components/Attraction/Attraction';
import Food from './Components/Food/Food'; 

// Shortcuts
// rfce : for making fuctional component and export it

const App = () => {
  return (
    <div>
        <Router>
            <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/hotel' element={<Hotel/>} ></Route>
              <Route path='/login' element={<Login/>} ></Route>
              <Route path='/map' element={<Map/>} ></Route>
              <Route path='/booking' element={<Booking/>} ></Route>
              <Route path='/forts' element={<Forts/>} ></Route>
              <Route path='/attraction' element={<Attraction/>} ></Route>
              <Route path='/food' element={<Food/>} ></Route>
            </Routes>
        </Router>
    </div>
  );
};

export default App;
