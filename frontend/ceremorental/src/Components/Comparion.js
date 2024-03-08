import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';
// import "../Style/Ccomparison.css";


const ComparisonPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchComparisonItems = async () => {
      // Replace with your actual API endpoint
      const response = await axios.get('http://localhost:8000/api/comparison');
      setItems(response.data);
    };

    fetchComparisonItems();
  }, []);

  return (
    <Layout>
      <h1>Comparison</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            {/* Add more columns here */}
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              {/* Add more cells here */}
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default ComparisonPage;