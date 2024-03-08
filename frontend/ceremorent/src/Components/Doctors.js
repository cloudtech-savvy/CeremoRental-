import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/CTO.png";
import profile2 from "../Assets/sales&m.png";
import profile3 from "../Assets/comm.png";
// import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span> Our  Team </span>
        </h3>
        <p className="dt-description">
          The Platform enables you to book event materials from suppliers mainly
          across Rubavu district and all over the country. Gain access to a wide
          range of fantastic and essential materials delivered right to your
          event venue.
        </p>
      </div>
      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Aime Patrick "
          title="Chief Technology Officer"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile2}
          name="Jean Paul "
          title="Sales and Marketing Manager"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name=" Josua Mugisha"
          title="Communication Manager"
          stars="4.7"
          reviews="450"
        />
      </div>
    </div>
  );
}

export default Doctors;
