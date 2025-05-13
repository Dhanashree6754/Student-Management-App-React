import React, { useState } from 'react';
import { loginStudent } from '../Services/api';  // Use loginStudent instead of loginUser

const Login = () => {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await loginStudent(email, password);  // Use loginStudent function

        if (res.success) {
            localStorage.setItem("isLoggedIn", true);
            alert("Login Successful!");
            window.location.href = "/showdata";  // Redirect to the page where students data is shown
        } else {
            alert("Invalid Credentials!");  // Update error message to reflect the student context
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter Email-ID"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="username"
                    required
                /> <br /><br />
                
                <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                /> <br /><br />

                <button type="submit" className="btn btn-primary ms-3">Login</button>
            </form>
        </div>
    );
};

export default Login;
