import  { useEffect } from 'react'
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import { setMessages } from '../Slices/messageSlice';
import { BASE_URL } from '../Apis/BackendBaseURL'

const useGetMessages = () => {
    const storedToken = JSON.parse(localStorage.getItem('anonytoken')); // Use token from Redux or localStorage

    const {selectedUser} = useSelector(store=>store.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/message/getmessage/${selectedUser?._id}`,{
                    headers: {
                      Authorization: `Bearer ${storedToken}`, // Pass token in Authorization header
                    },
                  });
                dispatch(setMessages(res.data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchMessages();
    }, [selectedUser?._id,setMessages]);
}

export default useGetMessages