import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from '../../Slices/authSlice';
import './css.css';
import { ImUser } from "react-icons/im";

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
                <div  className={`avatar ${isOnline ? 'online' : ''}`}>
                   


                         <span><ImUser/></span>
                        <p>{user?._id}</p>
                
                </div>
            </div>
        </>
    );
};

export default OtherUser;
