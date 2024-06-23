import React, { useState } from 'react'
import "./ProductPage.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faStar, faGrip} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { items } from '../../components/Data.jsx'


const scrollToTop = () => {
    window.scrollTo(0, 0)
  }


const ProductPage = () => {

    const InitialItems = items.filter(item => item.id >10 && item.id <51);
    const [sortedItems, setSortedItems] = useState(InitialItems);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });


    const handlefeatured = () => {
        setSortedItems(InitialItems);
    }
    const handlelowtohigh = (e) => {
        const sorted = [...sortedItems].sort((a,b) => a.price-b.price);
        setSortedItems(sorted)
    }
    const hadnlehightolow = (e) => {
        const sorted = [...sortedItems].sort((a,b) => b.price-a.price);
        setSortedItems(sorted)        
    }
    const handlenewestarrival = () => {
        setSortedItems(InitialItems);        
    }
    const handleavgrating = () => {
        setSortedItems(InitialItems);        
    }
    const handleRange = () => {
        const sorted = InitialItems.filter(item => item.price > priceRange.min && item.price < priceRange.max)
        setSortedItems(sorted)
    }


    const handlePriceChange = (e) => {
  const { name, value } = e.target;
  setPriceRange(prev => ({
    ...prev,
    [name]: parseInt(value)
  }));
};


  return (
    <>
    <Navbar/>

    <div className="master-product-detail-div">
        <div className="product-detail-div">
        <div className="product-detail-title-div">
            <h3>SHOP - PRODUCT</h3>
        </div>
        <div className="product-detail-text-div">
            <p>Home <FontAwesomeIcon icon={faAngleRight} /> Shop <FontAwesomeIcon icon={faAngleRight} />
             <span>  Shop Products</span></p>
        </div>
        </div>
    </div>


    <div className="master-div">

       {/* product filter div ................................................................ */}

       <div className="master-filter-div">
        <div className="master-categories-div">
            <div className="category-div">
                CATEGORIES
            </div>
            <div className='line-div'></div>
            <ul className='categories-ul' >
                <li>Chairs</li>
                <li>Tables</li>
                <li>Sofas</li>
                <li>Beds</li>
                <li>Lights</li>
                <li>Elctric appliance</li>
            </ul>
        </div>
        <div className="master-categories-div">
            <div className="category-div">
                FILTER BY PRICE
            </div>
            <div className='line-div'></div>
            <div className="price-slider-div">
            <input
              type="range"
              className="min-price"
              name="min"
              min="0"
              max="500"
              value={priceRange.min}
              onChange={handlePriceChange}
            />
            <input
              type="range"
              className="max-price"
              name="max"
              min="0"
              max="500"
              value={priceRange.max}
              onChange={handlePriceChange}
            />
            </div>
            
            <div className="price-range-text">
              <div className='price-space-div' ><span> Price Range:</span> <span style={{color:'black', fontWeight:'600'}} >${priceRange.min} - ${priceRange.max}</span></div>
               <button onClick={handleRange} className='gobutton' >Go</button>
            </div>
            
        </div>
        <img src="https://res.cloudinary.com/dhrugutmv/image/upload/v1718448510/ecommerce/images/banner/side-banner_bstbzb.jpg" style={{width: '280px', marginRight: '10px'}} alt="Not able to fetch" />
       </div>


    <div className="master-prod-div">

    <div className="master-sort-div">
        <div className="results-div">
        <FontAwesomeIcon icon={faGrip} />
         Showing 1–9 of 21 results
        </div>
        <div className="sort-div">
            <span>Sort By:</span>
            <select name="sort by" className="sort-div-dropdown" onChange={(e) => {
                const value = e.target.value;
                if (value === "featured") handlefeatured();
                if (value === "lowtohigh") handlelowtohigh();
                if (value === "hightolow") hadnlehightolow();
                if (value === "newestarrival") handlenewestarrival();
                if (value === "avgrating") handleavgrating();
              }}>
                <option value="featured">Featured</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
                <option value="newestarrival">Newest Arrival</option>
                <option value="avgrating">Avg. Rating</option>
            </select>            
        </div>
    </div>

        {/* product listing div .............................................................. */}
    <div className="masternewprod">
        

    {sortedItems.map((item,index) => (
        <div className="newproducts" key={index} >
                
            
          <div className="newimg-div">
            <img className='img-div' src={item.imgURL} alt="" />
            <a href="#"></a>            
          </div>
          <div className="new-detail-div">
            <Link onClick={scrollToTop}  to='/productdetails/11'>
              <h6>{item.title}</h6>
            </Link>
              <div className="rating">
                <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
                </span>
                <p className='price-tag' >${item.price}</p>
                </div>         
          </div>
        </div>    
    ))}
        
        </div>
        </div>

    </div>


    <Footer/>
    </>
  )
}

export default ProductPage
