import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';



import { Provider } from "react-redux";
import rootReducer from "./Reducer/index.jsx"
import { configureStore } from "@reduxjs/toolkit"


const store = configureStore({
  reducer: rootReducer,
});



createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    <Toaster/>
    </Provider>
)
