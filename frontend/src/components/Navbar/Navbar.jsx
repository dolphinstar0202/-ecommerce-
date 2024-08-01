import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faMagnifyingGlass,faCartPlus,faHeart,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import WishlistPanelContext from '../../context/WishlistPanleslider/WishlistPanelContext'
import WishlistPanel from '../WishlistsPanel/WishlistPanel'
import { items } from '../Data'
import debounce from 'lodash.debounce';

import SuprSendInbox from '@suprsend/react-inbox'
import 'react-toastify/dist/ReactToastify.css' 

// add to your react component NOTE: THIS IS FOR DEVELOPMENT AND NOT FOR DEPLOYED VERSION
{/* <SuprSendInbox
  workspaceKey= "CYJHJFdKTID2k1izkB8E"
  subscriberId= "YHLD4rzhh15kJVbSza73ZVe_gsySvXBZLzx743YIj_U"
  distinctId= "vedanshm2001@gmail.com"
/> */}




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
    <div 
      className='flex w-full bg-[#fef5ef] h-18 justify-between 
                  ' >      
       <div 
         className="font-mono w-[18%] p-0 h-12.5 font-bold text-xl pl-8 pt-3 
                    sm:text-2xl 
                    md:text-3xl">
         FURNISTORE
       </div>
      
       <div 
         className="w-[42%] h-12.5 font text-lg font-bold pl-4 hidden
                    xl:block ">
      
          <ul className='list-none h-[100%] flex justify-between pt-[15px] pr-[30px]' >       
            <li>
            <Link onClick={scrollToTop} to='/' 
              className='text-sm text-[#24262b]
                         hover:text-opacity-70 transition-colors duration-200 ease-in-out' >
              HOME 
              <FontAwesomeIcon icon={faAngleDown} 
              className='text-xs font-thin ml-1' size="3xs" />
            </Link>
            </li>

            <li>
            <Link onClick={scrollToTop} to='/productpage' 
              className='text-sm text-[#24262b]
                         hover:text-opacity-70 transition-colors duration-200 ease-in-out' >
              PRODUCTS 
            </Link>
            </li>

            <li>
            <Link onClick={scrollToTop} 
              className='text-sm text-[#24262b]
                         hover:text-opacity-70 transition-colors duration-200 ease-in-out' >
              BLOG 
              <FontAwesomeIcon icon={faAngleDown} 
              className='text-xs font-thin ml-1' size="3xs" />
            </Link>
            </li>

            <li>
            <Link onClick={scrollToTop} 
              className='text-sm text-[#24262b]
                         hover:text-opacity-70 transition-colors duration-200 ease-in-out' >
              ABOUT US
            </Link>
            </li>

            <li>
            <Link onClick={scrollToTop} 
              className='text-sm text-[#24262b]
                         hover:text-opacity-70 transition-colors duration-200 ease-in-out' >
              CONTACT US
            </Link>
            </li>
          </ul>
       </div>

      <div 
        className="w-[60%] h-12.5 text-lg font-extrabold flex items-center justify-end
                   lg:w-[40%] 
                   ">        
         <div 
           className='w-[60%] h-7.5 hidden items-center rounded bg-[rgb(225,225,225)]
                      lg:flex ' 
           style={{boxShadow:'1px 1px 5px rgba(0, 0, 0, 0.3)'}}>
            <input 
              className='w-[90%] h-[30px] border-0 pl-2.5 font-medium text-base bg-[rgb(235,235,235)] rounded-tl rounded-bl ' 
              type='text' 
              onChange={debouncedOnchange} 
              placeholder='Search...' 
            />
           
          <Link 
              onClick={scrollToTop} 
              className='w-[10%] h-[30px] text-base bg-[rgb(235,235,235)] flex items-center content-center rounded-tr rounded-br' >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
            {query && (
              <div 
                className="w-[28%] h-[50px] absolute top-[42px] font-medium text-lg">
                {filteredProd.map((item) => (
                  <div key={item.id} 
                    className="h-[40px] bg-[rgb(235,235,235)] pl-2.5" >
                    <Link to={`/productdetails/${item.id}`} 
                       className='text-[rgb(50,50,50)] flex items-center'>
                       <img src={item.imgURL} alt="" 
                       className='h-[30px] w-[30px] bg-lightgrey mr-2.5 rounded-sm'
                       />
                       {item.title.toLowerCase()}
                    </Link>
                  </div>              
                    ))} 
              </div>
            )}
        </div>
        
        
        <ul 
          className='list-none p-0 pt-1 pl-2 mt-2 w-[60%] flex justify-end
                     lg:w-[40%]
                     lg:ml-5
                     xl:ml-2' >

            <li 
              className='inline mr-5
                           lg:hidden '>
              <FontAwesomeIcon icon={faMagnifyingGlass} />

            </li>

            <li 
              className='inline mr-5
                         xl:mr-[12%]' >
                <Link onClick={handleWishlistPanel} >
                  <FontAwesomeIcon icon={faHeart} 
                  className='font-lg text-[#24262b]
                         hover:text-opacity-70 transition-colors duration-200 ease-in-out'
                 />
                </Link>
            </li>

            <li 
              className='inline mr-5
                         xl:mr-[12%]' >
                <Link onClick={scrollToTop} to='/cartpage' >
                  <FontAwesomeIcon icon={faCartPlus} 
                  className='font-lg text-[#24262b]
                         hover:text-opacity-70 transition-colors duration-200 ease-in-out' 
                  />
                </Link>
            </li>
            <li
                className='-mt-4' >
                <SuprSendInbox
                workspaceKey= "KuM1eXvnukphS3JzHD02"
                subscriberId= "OGDv9D-9BIKG20iYtoFRzQBZ5MKlkmA4sVnMWs6wyAo"
                distinctId= "test123"
            /> 
            </li>

            <li 
              className='inline mr-5
                         xl:mr-[8%]' >
                <span className=' bg-[#efe6e0] px-2.5 py-2 rounded-full 
                                    hover:bg-opacity-60 transition-colors duration-300 ease-in-out '>
                <Link onClick={scrollToTop} >
                  <FontAwesomeIcon icon={faBars} 
                  className='font-lg text-[#24262b]
                         hover:text-opacity-70 transition-colors duration-200 ease-in-out' 
                  />
               </Link>
               </span>
            </li>
        </ul>        
      </div>
     
      {isOpen && <div 
          className="fixed top-0 right-0 w-[100%] h-[100%] bg-[#FFFFFF] p-5
                     sm:w-[400px] "
          style={{zIndex:'1000'}} >
          
        <WishlistPanel />
      </div>} 

    </div>
  )
}

export default Navbar
