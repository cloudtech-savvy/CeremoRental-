import React from "react";
import RegisterForm from "../Components/RegisterForm";
import Navbar from "../Components/Navbar";
import  Footer from "../Components/Footer";

function Register() {
  return (
    <div className="register-section">
      <Navbar/>
      <RegisterForm />
      <Footer />
    </div>
  )
}
export default Register;
