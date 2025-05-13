import React, { useState } from 'react';
import { registerStudent } from '../Services/api';  // Use registerStudent instead of registerUser

const Register = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        department: 'Science',  // Default set to 'Science' (or choose any default)
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);  // Check if the department is correctly updated
        await registerStudent(form);  // Register using registerStudent
        alert("Student Registered Successfully..!");
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    required
                    onChange={handleChange}
                /> <br /><br />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email-ID"
                    required
                    autoComplete="username"
                    onChange={handleChange}
                /><br /><br />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    autoComplete="current-password"
                    required
                    onChange={handleChange}
                /><br /><br />

                <select name="department" value={form.department} onChange={handleChange}>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                </select> <br /><br />

                <button type="submit" className="btn btn-primary ms-3">Register</button>
            </form>
        </div>
    );
};

export default Register;
