import React, { useState } from 'react';
import './Components.css';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../Apis/BackendBaseURL'; // Adjust the relative path


const Otp= ({email,password,cpassword,setShowOtp}) => {
    const navigate=useNavigate();

    const [otp,setOtp]=useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
    
        try {
            const response=await axios.post(BASE_URL+'/api/users/signup',{email,password,cpassword,otp});
            if(response.data.success)
            {   
                alert("registration successful!")
                setShowOtp(false);
                navigate('/login')
            }
            else{
                alert(response.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    };


  return (
    <div className="otp-form-container">
      <h2>Enter OTP</h2>
      <form className="otp-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="otp-input"
          placeholder="Enter OTP"
          maxLength="6"
          value={otp}
          onChange={(e)=>setOtp(e.target.value)}
        />
        <div className="otp-buttons">
          <button type="submit" className="otp-submit-btn">
            Submit OTP
          </button>
          <button type="button" className="otp-resend-btn">
            Resend OTP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Otp;
