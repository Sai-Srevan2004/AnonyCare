import React from 'react';
import OtherUser from './OtherUser';
import useGetOtherUsers from '../../Hooks/useGetOtherUsers';
import { useSelector } from "react-redux";
import './css.css';

const OtherUsers = () => {
    // My custom hook
    useGetOtherUsers();
    const { otherUsers } = useSelector(store => store.auth);
    if (!otherUsers) return null; // Early return in React

    return (
        <div className='other-users-container'>
            {otherUsers.map((user) => (
                <OtherUser key={user._id} user={user} />
            ))}
        </div>
    );
};

export default OtherUsers;
