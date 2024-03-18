import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProductForm = () => {
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        vendor: '',
        description: '',
        price: ''
    });

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axios.get('/api/get_categories/');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send form data to backend for processing
            await axios.post('/api/add_product/', formData);
            // Redirect or show success message
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" />
            <select name="category" value={formData.category} onChange={handleChange}>
                <option value="">Select Category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <input type="text" name="vendor" value={formData.vendor} onChange={handleChange} placeholder="Vendor" />
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddProductForm;
