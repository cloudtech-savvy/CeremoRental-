// // pages/index.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from './Layout';

// const HomePage = () => {
//   const [items, setItems] = useState([]);
//   const [vendors, setVendors] = useState([]);

//   useEffect(() => {
//     const fetchItemsAndVendors = async () => {
//       const itemsResponse = await axios.get('http://localhost:8000/api/items/');
//       const vendorsResponse = await axios.get('http://localhost:8000/api/vendors/');
//       setItems(itemsResponse.data);
//       setVendors(vendorsResponse.data);
//     };

//     fetchItemsAndVendors();
//   }, []);

//   return (
//     <Layout>
//       {/* Display your items and vendors here */}
//     </Layout>
//   );
// };

// export default HomePage;

import React from "react";
import About from "../Components/About";
import Booking from "../Components/Booking";
import Chat from "../Components/Chat";
import Comparion from "../Components/Comparion";
// import Footer from "../Components/Footer";
// import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Navigation from  "../Components/Navigation";  
import SubscribeNewsLetter from "../Components/SubscribeNewsLetter"

function Home() {
  return (
    <div className="home-section">

       {/*<Header/>*/}
       
       <Navigation/>
       <Hero/>
      <About/>
      <Booking/>
      <Chat/>
      <Comparion/>
      <SubscribeNewsLetter/>
       {/* <Footer/> */}
    </div>
  );
}
export default Home;