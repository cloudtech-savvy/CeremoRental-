import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Hello from "./Components/Hello";
import Hero  from "./Components/Hero";
// import Home from "./Components/Home";
import Booking from "./Components/Booking";
import NotFound from "./Pages/NotFound";
import Chat from './Pages/Chat';
import Comparion from "./Pages/Comparision";
import ItemDetails from './Pages/ItemDetails';
import Items from './Pages/Items';
import WishList from './Pages/WishList';
import Payment from './Pages/Payment';
import VendorProfiles from './Pages/VendorProfiles';
import Visualization from './Pages/Visualization';
import About from "./Pages/About";
function App() {
  return (
  <div className="App">
      <Router basename="/">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/About" element={<About/>} />
          <Route path="/Booking" element={<Booking/>} />
          <Route path="/Chat" element={<Chat/>} />
          <Route path="/NotFound" element={<NotFound/>} />
          <Route path="/Comparion" element={<Comparion/>} />
          <Route path="/ItemDetails" element={<ItemDetails/>} />
          <Route path="/appointment" element={<Items/>} />
          <Route path="WishList" element={<WishList/>} />
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/VendorProfiles" element={<VendorProfiles/>} />
          <Route path="/Visualization" element={<Visualization />} />
          <Route path="WishList" element={<WishList/>} />
          {/* <Route path="Hero" element={<Hero/>} /> */}

        </Routes>
      </Router>
    </div>
  
  );
  
}
export default App;
