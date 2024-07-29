import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage.jsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import Cartpage from './pages/Cartpage/Cartpage.jsx'
import CartContextProvider from "./context/CartContextProvider.jsx"
import ProductPage from './pages/ProductPage/ProductPage.jsx'
import WishlistContextProvider from './context/WishlistContext/WishlistContextProvider.jsx'
import WishlistPage from './pages/Wishlist/Wishlist.jsx'
import WishlistPanelContextProvider from './context/WishlistPanleslider/WishlistPanelContextProvider.jsx'
import "./index.css";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='' element={<Homepage/>} />
    <Route path='cartpage/' element={<Cartpage/>} />
    <Route path='productdetails/:id' element={<ProductDetails />} />
    <Route path='productpage/' element={<ProductPage />} />
    <Route path='wishlistpage/' element={<WishlistPage/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <CartContextProvider>
    <WishlistContextProvider>
    <WishlistPanelContextProvider>
    <RouterProvider router={router} />
    </WishlistPanelContextProvider>
    </WishlistContextProvider> 
    </CartContextProvider>
  </React.StrictMode>
  
)
