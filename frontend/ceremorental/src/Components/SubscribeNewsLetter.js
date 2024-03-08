import React, { useState } from 'react';
import "../Style/SubscriptionNewsLetter.css"

const SubscribeNewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        // TODO: Implement subscription logic
        if (email) {
            // Perform subscription logic here
            // For example, make an API call to subscribe the email
            // You can use libraries like axios to make the API call
            // axios.post('/api/subscribe', { email })
            //   .then(response => {
            //     console.log('Subscription successful');
            //   })
            //   .catch(error => {
            //     console.error('Subscription failed', error);
            //   });
        } else {
            console.log('Email is required');
        }

        console.log(`Subscribing email: ${email}`);
    };

    const handleBookItem = (itemId) => {
        // TODO: Implement item booking logic

        console.log(`Booking item with ID: ${itemId}`);
        // Implement your item booking logic here
        // For example, you can make an API call to book the item
        // axios.post('/api/book', { itemId })
        //   .then(response => {
        //     console.log('Item booking successful');
        //   })
        //   .catch(error => {
        //     console.error('Item booking failed', error);
        //   });
    };

    return (
        <div>
            <h2>Subscribe to Newsletter</h2>
            <input type="email" value={email} onChange={handleEmailChange} />
            <button onClick={handleSubscribe}>Subscribe</button>

            <h2>Item Booking</h2>
            {/* Render your item list here */}
            {/* Example item */}
            <div>
                <h3>Item 1</h3>
                <button onClick={() => handleBookItem(1)}>Book</button>
            </div>
        </div>
    );
};

export default SubscribeNewsLetter;


