import React, { useState } from 'react';
import "../Styles/SearchForm.css";

const SearchForm = () => {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`/api/products/search?q=${query}`);
        const data = await response.json();
        setProducts(data);
    };

    return (
        <div>
            <form className ="searchform" onSubmit={handleSubmit}>
                <input type="text" className='text' value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit" className='search'>Search</button>
            </form>
            {products.map((product) => (
                <div className='a' key={product.id}>
                    <h2 className='b'>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default SearchForm;