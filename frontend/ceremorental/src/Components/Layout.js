import React from 'react';
import Header from './Header';
import Footer from "./Footer";
import Navigation from './Navigation';
import "../Style/Layout.css";

const  Layout = ({ children }) => (
  <div>
    <Header />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </div>
);
export default Layout;
