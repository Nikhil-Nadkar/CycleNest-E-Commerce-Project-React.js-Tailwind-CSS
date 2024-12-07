import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home/Home'
import Bikes from './Pages/Bikes/Bikes'
import ProductPage from './Pages/ProductPage/ProductPage.jsx'
import ContactUs from './Pages/ContactUS/ContactUs.jsx'


const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/Bikes',
    element: <Bikes />,
  },
  {
    path: '/Bikes/:BikeID',
    element: <ProductPage/>,
    
  },
  {
    path: '/Contactus',
    element: <ContactUs/>,
  }
]);



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
  <StrictMode>
    
    <App />
  </StrictMode>,
)
