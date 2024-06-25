import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faX } from '@fortawesome/free-solid-svg-icons'
import './WishlistPanel.css'
import WishlistPanelContext from '../../context/WishlistPanleslider/WishlistPanelContext'
import WishlistContext from '../../context/WishlistContext/WishlistContext'
import { Link } from 'react-router-dom'

const WishlistPanel = () => {

    const {setIsOpen} = useContext(WishlistPanelContext);    
    const {wishlist} = useContext(WishlistContext)

    const handlecross = () => {
        setIsOpen(false);
    }

  return (
    <>
    <div className="master-cross-div">
    <div className="cross-div" onClick={handlecross}>
    <FontAwesomeIcon icon={faX} />
    </div>    
    </div>

    <div className="wishlist-text">
        Wishlist
    </div>
    
    <ul>
    {wishlist.map((item, index) => (
        <li key={index}>
            <div className="div-img-text">
            <img src={item.imgURL} alt="" style={{height:"90px", width:'90px'}} />
            <div className="price-text">
                <Link className='Link-text' >{item.title}</Link>
                <span>1 X ${item.price}</span>
            </div>
            </div>
            <div className="delete-div">
                <FontAwesomeIcon icon={faTrash} />
            </div>
            </li>
    ))}
    </ul>

    <div className="view-wishlist">
        <Link to='/wishlistpage' className='view-wishlist-Link-text' >VIEW WISHLIST</Link>
    </div>


    </>
  )
}

export default WishlistPanel
