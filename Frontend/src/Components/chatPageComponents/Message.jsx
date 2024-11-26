import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import './css.css';

const Message = ({ message }) => {
    const scroll = useRef();
    const { authUser, selectedUser } = useSelector(store => store.auth);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    console.log(message,"....",authUser)

    return (
        <div 
            ref={scroll} 
            className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}
        >
            <div className="chat-image avatar">
                <div className="avatar-wrapper">
                    <p> {
                            message?.senderId === authUser?._id 
                                ? authUser?._id  
                                : selectedUser?._id
                        } 
                    </p>
                </div>
            </div>
            <div className="chat-header">
                <time className="chat-time">12:45</time>
            </div>
            <div 
                className={`chat-bubble ${message?.senderId !== authUser?._id ? 'chat-bubble-other' : ''}`}
            >
                {message?.message}
            </div>
        </div>
    );
};

export default Message;
