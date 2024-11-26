import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from '../../Slices/authSlice';
import './css.css';

const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const { selectedUser, onlineUsers } = useSelector(store => store.auth);
    const isOnline = onlineUsers?.includes(user._id);

    const selectedUserHandler = (user) => {
        dispatch(setSelectedUser(user));
    };

    return (
        <>
            <div
                onClick={() => selectedUserHandler(user)}
                className={`user-item ${selectedUser?._id === user?._id ? 'user-item-selected' : ''}`}
            >
                <div className={`avatar ${isOnline ? 'online' : ''}`}>
                    <div className='avatar-wrapper'>
                        img
                    </div>
                </div>
                <div className='user-details'>
                    <div className='user-info'>
                        <p>{user?._id}</p>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
        </>
    );
};

export default OtherUser;
