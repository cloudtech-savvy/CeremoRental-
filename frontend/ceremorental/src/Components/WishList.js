import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';
// import "../Style/WishList.css";


const WishlistPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      // Replace with your actual API endpoint
      const response = await axios.get('http://localhost:8000/api/wishlist');
      setItems(response.data);
    };

    fetchWishlistItems();
  }, []);

  const handleRemoveFromWishlist = async (itemId) => {
    // Replace with your actual API endpoint
    await axios.delete(`http://localhost:8000/api/wishlist/${itemId}`);
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <Layout>
      <h1>My Wishlist</h1>
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <button onClick={() => handleRemoveFromWishlist(item.id)}>Remove from Wishlist</button>
        </div>
      ))}
    </Layout>
  );
};

export default WishlistPage;