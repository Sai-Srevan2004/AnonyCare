import React from 'react'
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
  return <RouterProvider router={router} />
}

export default App
