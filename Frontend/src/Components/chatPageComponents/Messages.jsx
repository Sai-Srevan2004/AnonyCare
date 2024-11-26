import React from 'react';
import Message from './Message';
import useGetMessages from '../../Hooks/useGetMessages';
import useGetRealTimeMessage from '../../Hooks/useGetRealTimeMessage';
import { useSelector } from "react-redux";
import './css.css';

const Messages = () => {
    useGetMessages();
    useGetRealTimeMessage();
    const { messages } = useSelector(store => store.message);

    return (
        <div className='messages-container'>
            {messages && messages.map((message) => (
                <Message key={message._id} message={message} />
            ))}
        </div>
    );
};

export default Messages;
