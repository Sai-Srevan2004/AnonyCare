import React, { useState } from 'react';
import './SignUpPage.css';
import axios from 'axios';
import { BASE_URL } from '../../Apis/BackendBaseURL'; // Adjust the relative path
import Otp from '../../Components/Otp';


const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOtp,setShowOtp]=useState(false);
    const [signing,setSigning]=useState(false);


    const handleSubmit = async(e) => {
        e.preventDefault();
        setSigning(true)
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response=await axios.post(BASE_URL+'/api/users/sendotp',{email});
            if(response.data.success)
            {   
                setSigning(false);
                setShowOtp(true)
                alert("vefify email otp sent to you!")
            }
            else{
                alert(response.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="signup-container">
            {
                showOtp?<Otp email={email} password={password} cpassword={confirmPassword} setShowOtp={setShowOtp}/>:<form className="signup-form" onSubmit={handleSubmit}>
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

                <button disabled={signing} type="submit" className={`signup-btn ${signing?'sign':''}`}>{signing?"Signing In...":"Sign Up"}</button>
            </form>
            }
        </div>
    );
};

export default SignUpPage;
