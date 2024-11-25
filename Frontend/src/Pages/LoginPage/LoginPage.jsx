import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../Apis/BackendBaseURL'; // Adjust the relative path
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setToken } from '../../Slices/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit =async (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., validation, API call)
        console.log('Email:', email, 'Password:', password);
        try {
            const response=await axios.post(BASE_URL+'/api/users/login',{email,password});
            if(response.data.success)
            {
                dispatch(setToken(response.data.token))
                localStorage.setItem('anonytoken', JSON.stringify(response.data.token));
                alert("logged in succesfully!")
                navigate('/')
            }
            else{
                alert(response.data.message)
            }
        } catch (error) {
            console.log(error);
        }
        
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                
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

                <div className="forgot-password">
                    <a href="#forgot-password">Forgot Password?</a>
                </div>

                <button type="submit" className="login-btnn">Login</button>

                <div className="signup-link">
                    <p>Do not have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
