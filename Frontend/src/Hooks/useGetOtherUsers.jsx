import { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from '../Slices/authSlice';
import { BASE_URL } from '../Apis/BackendBaseURL';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();
    const storedToken = JSON.parse(localStorage.getItem('anonytoken')); // Use token from Redux or localStorage


    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/users/getotherusers`,{
                    headers: {
                      Authorization: `Bearer ${storedToken}`, // Pass token in Authorization header
                    },
                  });
                // store
                console.log("other users -> ",res);
                dispatch(setOtherUsers(res.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers();
    }, [])

}

export default useGetOtherUsers