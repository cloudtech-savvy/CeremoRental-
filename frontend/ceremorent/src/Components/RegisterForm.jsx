import React, { useState } from 'react';
import "../Styles/RegisterForm.css";
import Navbar from "./Navbar";
const Register = () => {
    const [userType, setUserType] = useState('normal');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate form fields
        if (name.trim() === '') {
            alert('Please enter your name');
            return;
        }

        if (email.trim() === '') {
            alert('Please enter your email');
            return;
        }

        if (password.trim() === '') {
            alert('Please enter your password');
            return;
        }

        // Handle form submission logic here
        console.log('Form submitted!');
        console.log('User Type:', userType);
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };
                                        <><div>
        <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
        </label>
    </div><div>
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
        </div><div>
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
        </div><button type="submit">Register</button></>
    
};

export default Register;