import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faTrash } from '@fortawesome/free-solid-svg-icons'
import WishlistContext from '../../context/WishlistContext/WishlistContext'
import './Wishlist.css'
import CartContext from "../../context/CartContext.js"
import { Link } from 'react-router-dom'

const WishlistPage = () => {
    const { cart, setCart } = useContext(CartContext);
    const {wishlist} = useContext(WishlistContext)

    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }  
      

    const handleDelete = () => {
    }

    const addtocart = (id, price, title, description, imgURL) => {
        const obj = {
          id, price, title, description, imgURL
        }
        setCart([...cart, obj]);
        alert("Your product is added to the cart")
      }

  return (
    <>
    <Navbar/>

    {/* ............................................................................................................. */}
    <div className="master-product-detail-div">
        <div className="product-detail-div">
        <div className="product-detail-title-div">
            <h3>WISHLIST</h3>
        </div>
        <div className="product-detail-text-div">
            <p>Home <FontAwesomeIcon icon={faAngleRight} /> Shop <FontAwesomeIcon icon={faAngleRight} />
             <span>Wishlist</span></p>
        </div>
        </div>
    </div>
    {/* ......................................................................................................... */}

    <div className="master-table-div">
        <table>
            <tbody>
            <tr style={{backgroundColor:'#f6f6f6', height:'50px'}}>
                <th>Delete</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th>Total</th>
            </tr>
            

            {wishlist.map((item, index) => (
            <tr key={index} >
                <td style={{width:'12%'}} ><FontAwesomeIcon onClick={handleDelete} icon={faTrash} /></td>
                <td style={{width:'18%'}} ><img src={item.imgURL} alt="Not able to fetch" style={{height:"90px", width:'90px'}} /></td>
                <td style={{width:'20%'}} >{item.title}</td>
                <td style={{width:'20%'}} >${item.price}</td>
                <td style={{width:'18%', color:'#777777', fontWeight:'500'}} >In Stock</td>
                <td style={{width:'12%'}} >
                    <button className='cart-button' onClick={() => addtocart(item.id, item.price, item.title, item.description, item.imgURL
                    )} >+ ADD TO CART</button>
                </td>
            </tr> 
        ))}
        
            </tbody>
        </table>
        <Link onClick={scrollToTop} to='/cartpage'> 
            <button className='cart-button' style={{position:'relative', left:'85%', top:'30 px'}}>GO TO CART</button>
        </Link>
        
    </div>


    <Footer/>    
    </>
  )
}

export default WishlistPage;
