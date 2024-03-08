import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';
// import "../Style/VendorProfiles.css";

const VendorProfilePage = ({ match }) => {
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    const fetchVendor = async () => {
      // Replace with your actual API endpoint
      const response = await axios.get(`http://localhost:8000/api/vendors/${match.params.id}`);
      setVendor(response.data);
    };

    fetchVendor();
  }, [match.params.id]);

  if (!vendor) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>{vendor.name}</h1>
      <p>{vendor.description}</p>
      {/* Add more vendor details here */}
      {/* Add vendor items and reviews here */}
    </Layout>
  );
};

export default VendorProfilePage;