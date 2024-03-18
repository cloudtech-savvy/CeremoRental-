import React from "react";
import Navbar from "../Components/Navbar";
import ProductDetailPage from "../Components/ProductDetail";
import Footer from "../Components/Footer";

function ProductDetail() {
  return (
    <div className="home-section">
      <Navbar />
      <ProductDetailPage />
      <Footer />
    </div>
  );
}
export default ProductDetail;
