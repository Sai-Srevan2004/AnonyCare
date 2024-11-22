import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [languages, setLanguages] = useState([]);

    const handleLanguageChange = (e) => {
        const selectedLanguages = Array.from(e.target.selectedOptions, option => option.value);
        setLanguages(selectedLanguages);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Handle form submission logic here (e.g., validation, API call)
        console.log('Email:', email, 'Languages:', languages);
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="languages">Languages Known</label>
                    <select
                        id="languages"
                        value={languages}
                        onChange={handleLanguageChange}
                        multiple
                        required
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Italian">Italian</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Arabic">Arabic</option>
                    </select>
                </div>

                <button type="submit" className="signup-btn">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;
