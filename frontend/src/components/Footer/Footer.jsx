import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <>
    <div className="master-footer">
        <div className="details-div">
        <div className="details">
            <div className="details-inside">
                <h5>INFORMATION
                <div></div>
                </h5>
                
                <ul>
                    <li>Delivery Information</li>
                    <li>Terms & Conditions</li>
                    <li>Contact</li>
                    <li>Returns</li>
                </ul>
            </div>
            <div className="details-inside">
                <h5>MY ACCOUNT
                <div></div>
                </h5>                
                <ul>
                    <li>MY Account</li>
                    <li>My account</li>
                    <li>Wishlist</li>
                    <li>Privacy Policy</li>
                    <li>Frequently Questions</li>
                    <li>Order History</li>
                </ul>
            </div>
            <div className="details-inside">
                <h5>CATEGORIES
                <div></div>
                </h5>
                
                <ul>
                    <li>Decorative</li>
                    <li>Kitchen utensils</li>
                    <li>Chair & Bar stools</li>
                    <li>Sofas and Armchairs</li>
                    <li>Interior lighting</li>
                </ul>
            </div>
            <div className="details-inside">
                <h5>ABOUT US
                <div></div>
                </h5>
                
                <ul>
                    <li>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</li>
                    <li>Address: Your address goes here. Email: demo@example.com</li>
                </ul>
            </div>
        </div>
        </div>
        <div className="follow-subscribe">
            <div className="follow-subscribe-div">
            <div className="follow">
                <h5>FOLLOW US</h5>
                <p>
                <FontAwesomeIcon className="follow-icon" icon={faFacebookF} />
                <FontAwesomeIcon className="follow-icon" icon={faTwitter} />
                <FontAwesomeIcon className="follow-icon" icon={faInstagram} />
                <FontAwesomeIcon className="follow-icon" icon={faLinkedinIn} />
                </p>
            </div>
            <div className="subscribe">
            <h5>DON'T MISS OUT ON THE LATEST</h5>
            <input type="email" placeholder="Your email address..." />
            <button>SUBSCRIBE!</button>
            </div>
        </div>
        </div>
        <div className="copyright-visa">
            <div className="copyright-visa-div">
                <div className="copyright">
                    <p>© 2021 THERANKME. MADE WITH  <FontAwesomeIcon icon={faHeart} color="red"/>  BY THERANKME</p>
                </div>
                <div className="visa">
                    <p>Here logos of company will be present</p>

                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer
