import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faMagnifyingGlass,faCartPlus,faHeart,faAngleDown } from '@fortawesome/free-solid-svg-icons'

//created this function 'cause everytime when navigated through <Link> tag, the loaded page was loded with its middle
//part and some times bottom part.
const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const Navbar = () => {
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
            <li><Link onClick={scrollToTop} className='link-text' >PAGES <FontAwesomeIcon icon={faAngleDown} className='icon-styling-faAngleDown' size="2xs" transform="down-2" /></Link></li>
            <li><Link onClick={scrollToTop} className='link-text' >ABOUT US</Link></li>
            <li><Link onClick={scrollToTop} className='link-text' >CONTACT US</Link></li>
        </ul>
      </div>
      <div className="wishcartsearchicon">
        <ul>
            <li><Link onClick={scrollToTop} className='link-text' ><FontAwesomeIcon icon={faHeart} className='icon-styling' /></Link></li>
            <li><Link onClick={scrollToTop} to='/cartpage' className='link-text' ><FontAwesomeIcon icon={faCartPlus} className='icon-styling' /></Link></li>
            <li><Link onClick={scrollToTop} className='link-text' ><FontAwesomeIcon icon={faMagnifyingGlass} className='icon-styling' /></Link></li>
            <li><Link onClick={scrollToTop} className='link-text' ><FontAwesomeIcon icon={faBars} className='icon-styling' /></Link></li>
        </ul>        
      </div>
      
    </div>
  )
}

export default Navbar
