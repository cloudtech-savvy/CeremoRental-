import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';
// import  "../Style/ItemDetails.css";


const ItemDetailPage = ({ match }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get(`http://localhost:8000/api/items/${match.params.id}`);
      setItem(response.data);
    };

    fetchItem();
  }, [match.params.id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      {/* Add more item details here */}
      {/* Add 360° view and reviews here */}
    </Layout>
  );
};

export default ItemDetailPage;