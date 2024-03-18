import React, { useState } from 'react';
import '../Styles/ContactForm.css';
function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would handle the form submission.
        // This could involve sending a request to a server, for example.
        console.log(formState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                 Full Name:
                <input type="text" name="name" value={formState.name} onChange={handleChange} />
            </label>
            <label>
                Email address:
                <input type="email" name="email" value={formState.email} onChange={handleChange} />
            </label>
            <label>
                Message:
                <textarea name="message" value={formState.message} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ContactForm;