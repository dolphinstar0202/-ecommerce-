import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage.jsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import Cartpage from './pages/Cartpage/Cartpage.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='' element={<Homepage/>} />
    <Route path='cartpage' element={<Cartpage/>} />
    <Route path='productdetails' element={<ProductDetails/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
