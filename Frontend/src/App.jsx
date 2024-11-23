import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import SignUpPage from './Pages/SignupPage/SignupPage'
import ChatPage from './Pages/ChatPage/ChatPage'
import AboutUsPage from './Pages/AboutPage/AboutUsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      {path:'/login',element:<LoginPage/>},
      {path:'/signup',element:<SignUpPage/>},
      {path:'/chat',element:<ChatPage/>},
      {path:'/about',element:<AboutUsPage/>}
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
