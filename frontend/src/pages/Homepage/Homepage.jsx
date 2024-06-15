import React from 'react'
import "./Homepage.css"
import Navbar from '../../components/Navbar/Navbar.jsx'
import servicepromo1 from "../../images/icons/service-promo-1.png"
import servicepromo2 from "../../images/icons/service-promo-2.png"
import servicepromo3 from "../../images/icons/service-promo-3.png"
import servicepromo4 from "../../images/icons/service-promo-4.png"
import Footer from '../../components/Footer/Footer.jsx'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faStar } from '@fortawesome/free-solid-svg-icons'

//created this function 'cause everytime when navigated through <Link> tag, the loaded page was loded with its middle
//part and some times bottom part.
const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const Homepage = () => {
  return (
    <>
    <div className="landing" >


      <Navbar />



      <div className="homepage" >
        <div className="textcenter">
          <h4>NEW COLLECTION</h4>
          <h2>Best Of NeoCon
            <br></br>
            Gold Award</h2>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>



    {/* services offered (free shipping, 30 days money back etc) */}
    <div className='services' >
      <div className='services-sub'>
        <img src={servicepromo1} alt="Fetch error" style={{ width: '80px', height: '80px' }} />
        <h6>FREE SHIPPING</h6>
        <p>Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!</p>
      </div>
      <div className='services-sub'>
      <img src={servicepromo2} alt="Fetch error" style={{ width: '70px', height: '70px' }} />
      <h6>30 DAYS MONEY BACK</h6>
      <p>100% satisfaction guaranteed, or get your money back within 30 days!</p>
      </div>
      <div className='services-sub'>
      <img src={servicepromo3} alt="Fetch error" style={{ width: '70px', height: '70px' }} />
      <h6>SAFE PAYMENT</h6>
      <p>Pay with the world’s most popular and secure payment methods.</p>
      </div>
      <div className='services-sub'>
      <img src={servicepromo4} alt="Fetch error" style={{ width: '70px', height: '70px' }} />
      <h6>LOYALTY CUSTOMER</h6>
      <p>Card for the other 30% of their purchases at a rate of 1% cash back.</p>
      </div>
    </div>



    <div className='items'>
      <div className="items-leftdiv">
      <div className="content-left">
            <h4>Mini rechargeable Table Lamp - E216</h4>
            <h5>WE DESIGN YOUR HOME</h5>
            <button>DISCOVER NOW <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>  
      </div>
      <div className="items-rightdiv">

        <div className="items-rightdiv-top">
        <div className="r-div1">
          <div className="content">
            <h4 className='title' >Kitchen utensils</h4>
            <Link onClick={scrollToTop} to='/productdetails' className='link-text' >SHOP NOW</Link>
          </div>
        </div>
        <div className="r-div2">
        <div className="content">
            <h4 className='title' >Sofas and Armchairs</h4>
            <Link onClick={scrollToTop}  to='/productdetails' className='link-text'>SHOP NOW</Link>
          </div>          
        </div>
        </div>

        <div className="items-rightdiv-bottom">
        <div className="r-div3">
        <div className="content">
            <h4 className='title' >Chair & Bar stools</h4>
            <Link onClick={scrollToTop}  to='/productdetails' className='link-text'>SHOP NOW</Link>
          </div>          
        </div>
        <div className="r-div4">
        <div className="content">
            <h4 className='title' >Interior lighting</h4>
            <Link onClick={scrollToTop}  to='/productdetails' className='link-text'>SHOP NOW</Link>
          </div>
        </div>
        </div>

      </div>
    </div>

{/* the new arrival ............................................................... */}




    <div className='The-new-arrival' >
      <h3>THE NEW ARRIVALS</h3>
      <p>Preorder now to receive exclusive deals & gifts</p>      
    </div>



    <div className="display-new-arrival-div">
      <div className="startdiv-arrival">

      </div>
      <div className="display-new-arrival">
        <div className="display-new-arrival-top">
        <div className="newproducts">
          <div className="newimg-div1">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>            
          </div>
          <div className="new-detail-div">
            <Link onClick={scrollToTop}  to='/productdetails'>
              <h6>ALIQUAM LOBORTIS</h6>
            </Link>
              <div className="rating">
                <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
                </span>
                <p className='price-tag' >$85.00</p>
                </div>         
          </div>
        </div>
        <div className="newproducts">
          <div className="newimg-div2">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
          <Link onClick={scrollToTop}  to='/productdetails'>
              <h6>CONDIMENTUM PERFUME</h6>
              </Link>
              <div className="rating">
              <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
                </span>
                <p className='price-tag' >$60.00</p>
                </div>
          </div>
        </div>
        <div className="newproducts">
          <div className="newimg-div3">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
          <Link onClick={scrollToTop}  to='/productdetails'>
              <h6>ELECTRIC KETTLE</h6>
              </Link>
              <div className="rating">
              <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
                </span>
                <p className='price-tag' >$100.00</p>
                </div>
          </div>
        </div>
        <div className="newproducts">
          <div className="newimg-div4">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
          <Link onClick={scrollToTop}  to='/productdetails'>
              <h6>WINDED CHAIR</h6>
              </Link>
              <div className="rating">
              <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
                </span>
                <p className='price-tag' >$73.00</p>
                </div>
          </div>
        </div>
        </div>

        <div className="display-new-arrival-bottom">
        <div className="newproducts">
          <div className="newimg-div5">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
          <Link onClick={scrollToTop}  to='/productdetails'>
              <h6>ELECTRIC KETTLE</h6>
              </Link>
              <div className="rating">
              <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
                </span>
                <p className='price-tag' >$73.00</p>
                </div>
          </div>
        </div>
        <div className="newproducts">
          <div className="newimg-div6">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
          <Link onClick={scrollToTop}  to='/productdetails'>
              <h6>WINDED CHAIR</h6>
              </Link>
              <div className="rating">
              <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
                </span>
                <p className='price-tag' >$73.00</p>
                </div>
          </div>
        </div>
        <div className="newproducts">
          <div className="newimg-div7">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
          <Link onClick={scrollToTop}  to='/productdetails'>
              <h6>CONDIMENTUM PERFUME</h6>
              </Link>
              <div className="rating">
              <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
                </span>
                <p className='price-tag' >$73.00</p>
                </div>
          </div>
        </div>
        <div className="newproducts">
          <div className="newimg-div8">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
          <Link onClick={scrollToTop}  to='/productdetails'>
              <h6>ELECTRIC KETTLE</h6>
            </Link>
              <div className="rating">
              <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
              </span>
                <p className='price-tag' >$73.00</p>
                </div>
          </div>
        </div>
        </div>
        
        
      </div>
      <div className="enddiv-arrival">
      </div>
    </div>


{/* new part................................................................................... */}

    <div className="modern-furniture-collection">
      <div className="modern-content">
        <h3>Modern Furniture Basic Collection</h3>
        <h5>WE DESIGN YOUR HOME MORE BEAUTIFUL</h5>
        <span className='discover-button'>DISCOVER NOW <FontAwesomeIcon icon={faArrowRight} /></span>
      </div>
    </div>



{/* new part........................................................................................ */}

<div className="master-best-seller-div">


    <div className='The-best-seller' >
      <h3>BEST SELLERS.</h3>
      <p>Add our best sellers to your weekly lineup.</p>      
    </div>



    <div className="best-seller-div">

      

      <div className="best-seller-prod-startdiv">

      </div>

      <div className="best-seller-products">

        <div className="best-seller-img">
          <div className="best-seller-div1">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>            
          </div>
          <div className="new-detail-div">
          <Link onClick={scrollToTop}  to='/productdetails'>
              <h6>ALIQUAM LOBORTIS</h6>
              </Link>
              <div className="rating">
              <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
              </span>
                <p className='price-tag' >$85.00</p>
                </div>         
          </div>
        </div>

        <div className="best-seller-img">
          <div className="best-seller-div2">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
          <Link onClick={scrollToTop}  to='/productdetails'>
              <h6>CONDIMENTUM PERFUME</h6>
              </Link>
              <div className="rating">
              <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
              </span>
                <p className='price-tag' >$60.00</p>
                </div>
          </div>
        </div>

        <div className="best-seller-img">
          <div className="best-seller-div3">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
          <Link onClick={scrollToTop}  to='/productdetails'>
              <h6>ELECTRIC KETTLE</h6>
              </Link>
              <div className="rating">
              <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
              </span>
                <p className='price-tag' >$100.00</p>
                </div>
          </div>
        </div>

        <div className="best-seller-img">
          <div className="best-seller-div4">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
          <Link onClick={scrollToTop}  to='/productdetails'>
              <h6>WINDED CHAIR</h6>
            </Link>
              <div className="rating">
              <span>
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='filled-icon' icon={faStar} />
                  <FontAwesomeIcon className='empty-icons' icon={faStar} />
              </span>
                <p className='price-tag' >$73.00</p>
                </div>
          </div>
        </div>

        </div>

        <div className="best-seller-prod-enddiv">
        
      </div>

    </div>


    </div>


    {/* product categories............................................... */}

    <div className="product-categories">
      <div className="prod-cat-img-1">
        <div className="prod-cat-content">
        <Link onClick={scrollToTop}  to='/productdetails' className='link-text' >
          <h4>BAR STOOL</h4>
          <h6>20 products</h6>
          </Link>
        </div>

      </div>
      <div className="prod-cat-img-2">
      <div className="prod-cat-content">
      <Link onClick={scrollToTop}  to='/productdetails' className='link-text' >
          <h4>ARMCHAIRS</h4>
          <h6>20 products</h6>
          </Link>
        </div>
      </div>
      <div className="prod-cat-img-3">
      <div className="prod-cat-content">
      <Link onClick={scrollToTop}  to='/productdetails' className='link-text' >
          <h4>LIGHTING</h4>
          <h6>20 products</h6>
          </Link>
        </div>
      </div>
      <div className="prod-cat-img-4">
      <div className="prod-cat-content">
      <Link onClick={scrollToTop}  to='/productdetails' className='link-text' >
          <h4>EASY CHAIRS</h4>
          <h6>20 products</h6>
          </Link>
        </div>
      </div>
    </div>


    {/* the blog posts.................................................................... */}


<div className="master-the-latest-blog">


<div className='the-latest-blog' >
  <h3>THE LATEST BLOGS</h3>
  <p>Present posts in a best way to highlight interesting moments of your blog.</p>      
</div>



<div className="latest-blog-div">


  <div className="latest-blog-posts-startdiv">

  </div>

  <div className="latest-blog-posts">

    <div className="latest-blog-img">
      <div className="latest-blog-div1">
      
        <a href="#"></a>            
      </div>
      <div className="new-detail-div">
        <a href="#">
          <h6>Blog Post One</h6>
        </a>
          <div className="rating">
            <p className='blog-para' >Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
              Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
              <br></br>
              <h4>READ MORE <FontAwesomeIcon icon={faArrowRight} /> </h4>
            </div>         
      </div>
    </div>

    <div className="latest-blog-img">
      <div className="latest-blog-div2">
      
        <a href="#"></a>
        
      </div>
      <div className="new-detail-div">
        <a href="#">
          <h6>Blog Post Two</h6>
        </a>
        <div className="rating">
            <p className='blog-para' >Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
              Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
              <br></br>
              <h4>READ MORE <FontAwesomeIcon icon={faArrowRight} /> </h4>
            </div> 
      </div>
    </div>

    <div className="latest-blog-img">
      <div className="latest-blog-div3">
      
        <a href="#"></a>
        
      </div>
      <div className="new-detail-div">
        <a href="#">
          <h6>Blog Post Three</h6>
        </a>
        <div className="rating">
            <p className='blog-para' >Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
              <br></br>
              <h4>READ MORE <FontAwesomeIcon icon={faArrowRight} /></h4>
            </div> 
      </div>
    </div>

    </div>

    <div className="best-seller-prod-enddiv">
    
  </div>
</div>
</div>


{/* honotemplate............................................................................... */}

<div className="masterhonotemplate">
  <div className="honotemplate-images">
    <div className="honotemplate">HONOTEMPLATE</div>
    <div className="hono-images1"></div>
    <div className="hono-images2"></div>
    <div className="hono-images3"></div>
    <div className="hono-images4"></div>
    <div className="hono-images5"></div>
    <div className="hono-images6"></div>
  </div>
</div>


{/* importing footer section............................................................. */}

<Footer/>
{/* <ProductDetails/>

<Cartpage/> */}
    </>
  )
}

export default Homepage
