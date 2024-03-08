import React from "react";
import "../Style/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Welcome to Ceremorental</h1>
      <p>Discover the perfect venue for your special event</p>
      <div className="hero-content">
        <h2>Find Your Dream Venue</h2>
        <p>
          Explore our wide selection of venues for weddings, parties, and
          corporate events.
        </p>
        <button className="btn">Browse Venues</button>
      </div>
      <div className="virtual-tour">
        <h2>Take a Virtual Tour</h2>
        <p>
          Experience our venues from the comfort of your own home with our
          virtual tour feature.
        </p>
        <button className="btn">Start Virtual Tour</button>
      </div>
      <div className="ceremonies">
        <h2>Discover Unique Ceremonies</h2>
        <p>
          Explore our collection of unique ceremonies for a truly memorable
          experience.
        </p>
        <button className="btn">View Ceremonies</button>
      </div>
      <div className="more-ceremonies">
        <h2>Explore More Ceremonies</h2>
        <p>
          Discover a wide range of additional ceremonies to make your event
          truly special.
        </p>
        <button className="btn">See More Ceremonies</button>
      </div>
    </div>
  );
};

export default Hero;
