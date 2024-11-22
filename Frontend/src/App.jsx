import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import SignUpPage from './Pages/SignupPage/SignupPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      {path:'/login',element:<LoginPage/>},
      {path:'/signup',element:<SignUpPage/>}
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
