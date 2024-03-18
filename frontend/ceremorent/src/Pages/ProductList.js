import React from "react";
import Navbar from "../Components/Navbar";
import ProductListPage from "../Components/ProductsList";
import Footer from "../Components/Footer";

function ProductList() {
  return (
    <div className="home-section">
      <Navbar />
      <ProductListPage />
      <Footer />
    </div>
  );
}
export default ProductList;
