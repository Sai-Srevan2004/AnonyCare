import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector } from "react-redux";
import './css.css';

const MessageContainer = () => {
    const { selectedUser,onlineUsers } = useSelector(store => store.auth);

    const isOnline = onlineUsers?.includes(selectedUser?._id);

    return (
        <>
            {selectedUser !== null ? (
                <div className='message-container'>
                    <div className='user-header'>
                        <div className={`avatar ${isOnline ? 'online' : ''}`}>
                            <div className='avatar-wrapper'>
                                <p>{selectedUser?._id}</p>
                            </div>
                        </div>
                        <div className='user-details'>
                            <div className='user-info'>
                                <p>{selectedUser?._id}</p>
                            </div>
                        </div>
                    </div>
                    <Messages />
                    <SendInput />
                </div>
            ) : (
                <div className='welcome-container'>
                    <h1 className='welcome-heading'>Hi</h1>
                    <h2 className='welcome-subheading'>Let's start a conversation</h2>
                </div>
            )}
        </>
    );
};

export default MessageContainer;
