import React, { useState } from 'react';
import Layout from './Layout';
// import "../Style/Payment.css";

const PaymentPage = ({ match }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    // Add more payment details here
  });

  const handleChange = (event) => {
    setPaymentDetails({
      ...paymentDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit payment details to your payment gateway API here
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input type="text" name="cardNumber" value={paymentDetails.cardNumber} onChange={handleChange} required />
        </label>
        <label>
          Expiry Date:
          <input type="text" name="expiryDate" value={paymentDetails.expiryDate} onChange={handleChange} required />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" value={paymentDetails.cvv} onChange={handleChange} required />
        </label>
        {/* Add more payment details here */}
        <button type="submit">Pay</button>
      </form>
    </Layout>
  );
};

export default PaymentPage;