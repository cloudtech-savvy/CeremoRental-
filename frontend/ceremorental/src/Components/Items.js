import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Layout from './Layout';
// import  "../Style/Items.css";

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get('http://localhost:8000/api/items/', {
        params: {
          search: searchTerm,
          filter: filter ? filter.value : null,
        },
      });
      setItems(response.data);
    };
    fetchItems();
  }, [searchTerm, filter]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = selectedOption => {
    setFilter(selectedOption);
  };

  const filters = [
    { value: 'filter1', label: 'Filter 1' },
    { value: 'filter2', label: 'Filter 2' },
    // Add more filters here
  ];

  return (
    <Layout>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search items" />
      <Select options={filters} onChange={handleFilterChange} />
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          {/* Add more item details here */}
        </div>
      ))}
    </Layout>
  );
};

export default ItemsPage;