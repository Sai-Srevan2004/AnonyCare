import React ,{useEffect,useState} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import SignUpPage from './Pages/SignupPage/SignUpPage'
import ChatPage from './Pages/ChatPage/ChatPage'
import AboutUsPage from './Pages/AboutPage/AboutUsPage'
import StoriesPage from './Pages/StoriesPage/StoriesPage'
import TrackMoodPage from './Pages/TrackMoodPage/TrackMoodPage'
import PrivateRoute from './Components/PrivateRoute'
import io from "socket.io-client";
import {useSelector,useDispatch} from "react-redux";
import { setSocket } from './Slices/socketSlice';
import { setOnlineUsers } from './Slices/authSlice';
import { BASE_URL } from './Apis/BackendBaseURL'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      {path:'/login',element:<LoginPage/>},
      {path:'/signup',element:<SignUpPage/>},
      {path:'/chat',element:<PrivateRoute><ChatPage/></PrivateRoute>},
      {path:'/about',element:<AboutUsPage/>},
      {path:'/stories',element:<StoriesPage/>},
      {path:'/trackmood',element:<PrivateRoute><TrackMoodPage/></PrivateRoute>}
    ],
  },
])

const App = () => {

  const {authUser} = useSelector(store=>store.auth);
  const {socket} = useSelector(store=>store.socket);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(authUser){
      const socketio = io(`${BASE_URL}`, {
          query:{
            userId:authUser
          }
      });
      dispatch(setSocket(socketio));

      socketio?.on('getOnlineUsers', (onlineUsers)=>{
        dispatch(setOnlineUsers(onlineUsers))
      });
      return () => socketio.close();
    }else{
      if(socket){
        socket.close();
        dispatch(setSocket(null));
      }
    }

  },[authUser]);

  return <RouterProvider router={router} />
}

export default App

