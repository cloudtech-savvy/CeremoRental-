import React from 'react';
import "../Style/Header.css";


const Header = () => {
  return (
    <header>
      <h1>Welcome to Ceremony Rental Platform</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;