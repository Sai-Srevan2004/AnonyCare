import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import './css.css';

const Message = ({ message }) => {
    const scroll = useRef();
    const { authUser, selectedUser } = useSelector(store => store.auth);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);


    return (
        <div 
            ref={scroll} 
            className={`chat ${message?.senderId === authUser ? 'chat-end' : 'chat-start'}`}
        >
            <div className='you-anony'>
               
                    <p> {
                            message?.senderId === authUser 
                                ? "You"  
                                : "Anony"
                        } 
                    </p>
                
            </div>
            <div className="chat-header">
                <time className="chat-time">{new Date(Date.now()).toISOString().split('T')[0]}</time>
            </div>
            <div 
                className={`chat-bubble ${message?.senderId !== authUser ? 'chat-bubble-other' : ''}`}
            >
                {message?.message}
            </div>
        </div>
    );
};

export default Message;
