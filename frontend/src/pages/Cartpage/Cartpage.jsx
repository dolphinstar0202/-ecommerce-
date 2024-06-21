import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Cartpage.css'
import Footer from '../../components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faTrash } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'

import CartContext from '../../context/CartContext'


const Cartpage = () => {
    const {cart} = useContext(CartContext)

    let [quantity, setQuantity] = useState(1);

    
    const handleQuantity = (e) => {
        if(e.key === 'Enter'){
            const value = parseInt(e.target.value,10);
            if(!isNaN(value)){
                setQuantity(value);
            }
        }
    }

    const calculateSubtotal = () => {
        return cart.reduce((acc, item) => acc + parseInt(item.price), 0).toFixed(2)
    }

    

    const handleDelete = () => {

    }
    

    


  return (
    <>

    <Navbar/>

    <div className="master-product-detail-div">
        <div className="product-detail-div">
        <div className="product-detail-title-div">
            <h3>CART</h3>
        </div>
        <div className="product-detail-text-div">
            <p>Home <FontAwesomeIcon icon={faAngleRight} /> Shop <FontAwesomeIcon icon={faAngleRight} /> <span>  Cart</span></p>
        </div>
        </div>
    </div>    
    

    <div className="master-table-div">
        <table>
            <tbody>
            <tr style={{backgroundColor:'#f6f6f6', height:'50px'}}>
                <th>Delete</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            

            {cart.map((item, index) => (
            <tr key={index} >
                <td style={{width:'12%'}} ><FontAwesomeIcon onClick={handleDelete} icon={faTrash} /></td>
                <td style={{width:'18%'}} ><img src={item.imgURL} alt="Not able to fetch" style={{height:"90px", width:'90px'}} /></td>
                <td style={{width:'20%'}} >{item.title}</td>
                <td style={{width:'20%'}} >${item.price}</td>
                <td style={{width:'18%'}} > <input onKeyDown={handleQuantity} style={{width:"60px", height:'40px', paddingLeft:'8px', fontSize:'16px'}} type="text" placeholder='1' /></td>
                <td style={{width:'12%'}} >${item.price*quantity}
                    
                </td>
            </tr> 
        ))}
        
            </tbody>
        </table>

        <div className="update-cart">
            <button>UPDATE CART</button>
            
        </div>
        
    </div>

    <div className="coupon-total">
        <div className="left-ct">
            <h3>COUPON</h3>
            
            <div className="coupon-enter">
            <p>Enter your coupon code if you have one.</p>
                <input type="text" placeholder='Coupon code' />
                <button>APPLY COUPON</button>
            </div>
        </div>

        <div className="right-ct">
            <h3>CART TOTALS</h3>
            
            <div className="coupon-inner">
                <div className="cart-subtotal">
                    <p>Subtotal</p>
                        <p>${calculateSubtotal()}</p>
                </div>
                <div className="cart-subtotal">
                    <p>Shipping</p>
                    <p>Flat Rate: $40.00</p>
                </div>
                <a href="#">Calculate Shipping</a>
                <div className="cart-subtotal">
                    <p>Total</p>
                    <p>${(parseFloat(calculateSubtotal()) + 40).toFixed(2)}</p>
                </div>
                <div className="checkout-button"><a href="">PROCEED TO CHECKOUT</a></div>
            </div>
        </div>
    </div>
    

    <Footer/>
    
    </>
  )
}

export default Cartpage
