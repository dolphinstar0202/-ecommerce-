import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Cartpage.css'
import default1 from '../../images/product/default/home-1/default-1.jpg'
import default2 from '../../images/product/default/home-1/default-2.jpg'
import default3 from '../../images/product/default/home-1/default-3.jpg'
import Footer from '../../components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faTrash } from '@fortawesome/free-solid-svg-icons'

const Cartpage = () => {
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
            <tr>
                <td style={{width:'12%'}} ><FontAwesomeIcon icon={faTrash} /></td>
                <td style={{width:'18%'}} ><img src={default1} alt="" style={{height:"90px", width:'90px'}} /></td>
                <td style={{width:'20%'}} >Chair</td>
                <td style={{width:'20%'}} >$64</td>
                <td style={{width:'18%'}} >Quantity <input style={{width:"60px", height:'40px', paddingLeft:'8px', fontSize:'16px'}} type="text" placeholder='1' /></td>
                <td style={{width:'12%'}} >$128</td>
            </tr> 
            <tr>
                <td><FontAwesomeIcon icon={faTrash} /></td>
                <td><img src={default2} alt="" style={{height:"90px", width:'90px'}} /></td>
                <td>Chair</td>
                <td>$90</td>
                <td>Quantity <input style={{width:"60px", height:'40px', paddingLeft:'8px', fontSize:'16px'}} type="text" placeholder='1' /></td>
                <td>$180</td>
            </tr>
            <tr>
                <td><FontAwesomeIcon icon={faTrash} /></td>
                <td><img src={default3} alt="" style={{height:"90px", width:'90px'}} /></td>
                <td>Bottle</td>
                <td>$80</td>
                <td>Quantity <input style={{width:"60px", height:'40px', paddingLeft:'8px', fontSize:'16px'}} type="text" placeholder='1' /></td>
                <td>$160</td>
            </tr>
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
                    <p>$215.00</p>
                </div>
                <div className="cart-subtotal">
                    <p>Shipping</p>
                    <p>Flat Rate: $255.00</p>
                </div>
                <a href="#">Calculate Shipping</a>
                <div className="cart-subtotal">
                    <p>Total</p>
                    <p>$215.00</p>
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
