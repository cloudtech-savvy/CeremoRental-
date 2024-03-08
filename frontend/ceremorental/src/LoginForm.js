import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validate({ username, password });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
        const response = await axios.post('/api/login', {
            username,
            password,
        });

    // Handle response...
    console.log(response.data); // Assuming the response contains data
    } catch (error) {
        // Handle error...
        console.log(error.message);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) errors.username = 'Username is required.';
    if (!values.password) errors.password = 'Password is required.';

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      {errors.username && <div>{errors.username}</div>}
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      {errors.password && <div>{errors.password}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;