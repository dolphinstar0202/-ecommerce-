import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faMagnifyingGlass,faCartPlus,faHeart,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import WishlistPanelContext from '../../context/WishlistPanleslider/WishlistPanelContext'
import WishlistPanel from '../WishlistsPanel/WishlistPanel'
import { items } from '../Data'
import debounce from 'lodash.debounce';


const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const Navbar = () => {
  
  const [ query, setQuery ] = useState("");
  const {isOpen, setIsOpen} = useContext(WishlistPanelContext)

  const filteredProd = query? items.filter((item) => item.title.toLowerCase().includes(query)) : [];

  const handleWishlistPanel = () => {
    setIsOpen(!isOpen);
  }

  const updateQuery = (e) => setQuery(e.target.value.toLowerCase());
  const debouncedOnchange = debounce(updateQuery, 300);

  

  return (
    <div className='Navbar' >
      <div className="companylogo">
        DEVSTORE
      </div>
      <div className="navicons">
        <ul>
            <li><Link onClick={scrollToTop} to='/' className='link-text' >HOME <FontAwesomeIcon icon={faAngleDown} className='icon-styling-faAngleDown' size="2xs" transform="down-2" /></Link></li>
            <li><Link onClick={scrollToTop} to='/productpage' className='link-text' >SHOP <FontAwesomeIcon icon={faAngleDown} className='icon-styling-faAngleDown' size="2xs" transform="down-2" /></Link></li>
            <li><Link onClick={scrollToTop} className='link-text' >BLOG <FontAwesomeIcon icon={faAngleDown} className='icon-styling-faAngleDown' size="2xs" transform="down-2" /></Link></li>
            {/* <li><Link onClick={scrollToTop} className='link-text' >PAGES <FontAwesomeIcon icon={faAngleDown} className='icon-styling-faAngleDown' size="2xs" transform="down-2" /></Link></li> */}
            <li><Link onClick={scrollToTop} className='link-text' >ABOUT US</Link></li>
            <li><Link onClick={scrollToTop} className='link-text' >CONTACT US</Link></li>
        </ul>
      </div>
      <div className="wishcartsearchicon">
        <div className="search-bar">
          <input className='search-prod' type='text' onChange={debouncedOnchange} placeholder='Search...' />
          <Link onClick={scrollToTop} className='search-icon' ><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
          {query && (
          <div className="suggestions-list">
            {filteredProd.map((item) => (
              <div key={item.id} className="suggestion-item" >
                <Link to={`/productdetails/${item.id}`} style={{textDecoration:'none', color:'rgb(50,50,50)', display:'flex', alignItems:'center'}} >
                <img src={item.imgURL} alt="" style={{height:'30px', width:'30px', backgroundColor:'lightgrey', marginRight:'10px', borderRadius:'2px' }} />
                {item.title.toLowerCase()}
                </Link>
              </div>
              
            ))} 
          </div>
          )}
        </div>
        <ul>
            <li><Link onClick={handleWishlistPanel} ><FontAwesomeIcon icon={faHeart} className='icon-styling' /></Link></li>
            <li><Link onClick={scrollToTop} to='/cartpage' ><FontAwesomeIcon icon={faCartPlus} className='icon-styling' /></Link></li>
            <li><Link onClick={scrollToTop} ><FontAwesomeIcon icon={faBars} className='icon-styling' /></Link></li>
        </ul>        
      </div>
      {isOpen && <div className="overlay">
        <WishlistPanel />
      </div>}

    </div>
  )
}

export default Navbar
