import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from '../../Slices/messageSlice';
import { BASE_URL } from '../../Apis/BackendBaseURL';
import './css.css';

const SendInput = () => {
    const storedToken = JSON.parse(localStorage.getItem('anonytoken')); // Use token from Redux or localStorage

    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(store => store.auth);
    const { messages } = useSelector(store => store.message);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL}/api/message/send/${selectedUser?._id}`, { message },{
                headers: {
                  Authorization: `Bearer ${storedToken}`, // Pass token in Authorization header
                },
              });
            dispatch(setMessages([...messages, res?.data?.newMessage]));
        } catch (error) {
            console.log(error);
        }
        setMessage("");
    };

    return (
        <form onSubmit={onSubmitHandler} className='send-input-container'>
            <div className='send-input-wrapper'>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    placeholder='Send a message...'
                    className='send-input'
                />
                <button type="submit" className='send-button'>
                    <IoSend />
                </button>
            </div>
        </form>
    );
};

export default SendInput;
