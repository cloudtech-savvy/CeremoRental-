import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          The Platform enables you to book event materials from suppliersall over the country. Gain access to a wide
          range of fantastic and essential materials delivered right to your
          event venue.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Birthday Party Rentals"
          description="Create magical birthday celebrations with our wide range of
          party rentals, including colorful decorations and fun games."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Conference Rentals"
          description="Empower knowledge-sharing and learning with our conference and
          seminar rentals. From audiovisual aids and more"
          icon={faHeartPulse}
        />

        <InformationCard
          title="Wedding Rentals"
          description=" Craft a picture-perfect wedding with our elegant decor and
          luxurious seating options."
          icon={faTooth}
        />
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Workshop or Training:"
          description="Foster creativity and skill development with our workshop and
          training rentals. Our functional setups and equipment will
          ensure a conducive learning environment for all participants."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Concerts"
          description="Let the music take center stage with our concert and music
          event rentals. Our top-notch audio equipment and stage setups
          will ensure an unforgettable experience for both performers
          and the audience."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Exhibition or Trade Show"
          description=" may your outlook will considered on your ceremonies here you
          are allowed to book your fit costumu, shoes for different size
          accordingly to your wish"
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
