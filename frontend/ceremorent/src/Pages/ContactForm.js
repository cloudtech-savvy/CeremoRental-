import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactPages from "../Components/ContactForm";


function ContactForm() {
    return (
      <div className="home-section">
        <Navbar/>
        <ContactPages/>
        <Footer/>
      </div>
    );
  }
  
  export default ContactForm;
