import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Booking  from "./Pages/BookingForm";
import Login from "./Pages/Login";
import ContactForm from "./Pages/ContactForm";
import ProductList from "./Pages/ProductList";
import ProductDetail from "./Pages/ProductDetail"; 

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<ContactForm />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
