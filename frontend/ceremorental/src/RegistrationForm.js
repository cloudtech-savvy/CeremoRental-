import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validate({ username, password, userType });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } 
    
    try {
      const response = await axios.post('/api/register', {
        username,
        password,
        userType,
      });

    // Handle response...
    console.log(response.data); // Assuming the response contains data
    } catch (error) {
      // Handle error...
    console.error(error);
    setErrors({ server: 'An error occurred. Please try again later.' });
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) errors.username = 'Username is required.';
    if (!values.password) errors.password = 'Password is required.';
    if (!values.userType) errors.userType = 'User type is required.';
    if (values.password.length < 8) errors.password = 'Password must be at least 8 characters long.';

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      {errors.username && <div>{errors.username}</div>}
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      {errors.password && <div>{errors.password}</div>}
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="">Select user type...</option>
        <option value="admin">Admin</option>
        <option value="uploader">vendor</option>
        <option value="renter">normal</option>
      </select>
      {errors.userType && <div>{errors.userType}</div>}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
