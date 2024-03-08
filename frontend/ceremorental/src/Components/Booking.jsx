import React, { useState } from 'react';
import  Layout from "./Layout";
// import "../Style/Booking.css";  


const BookingPage = ({ match }) => {
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    // Add more booking details here
  });

  const handleChange = (event) => {
    setBookingDetails({
      ...bookingDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit booking details to your backend API here
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" value={bookingDetails.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={bookingDetails.time} onChange={handleChange} required />
        </label>
        {/* Add more booking details here */}
        <button type="submit">Book</button>
      </form>
    </Layout>
  );
};

export default BookingPage;