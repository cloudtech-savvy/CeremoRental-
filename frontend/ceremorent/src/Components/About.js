import React from "react";
import Doctor from "../Assets/banner1.jpg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Our platform connects event organizers with a wide range of ceremony
          venues, including wedding halls, conference centers, and outdoor
          spaces. With our user-friendly interface, you can easily browse and
          book the perfect  Items for your ceremony. Whether you're planning a
          wedding, corporate event, or any other special occasion, Ceremony
          Rental Platform is here to make your ceremony unforgettable.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a service"
          description="Discover a wide range of additional ceremonies to make your event
          truly special."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of professionals ensure your  Event planning and management ."
        />

        
      </div>
    </div>
  );
}

export default About;
