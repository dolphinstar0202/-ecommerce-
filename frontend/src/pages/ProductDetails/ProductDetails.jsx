import "./ProductDetails.css"
import Navbar from "../../components/Navbar/Navbar.jsx"

const ProductDetails = () => {
  return (
    <>
    <Navbar/>
    <div className="master-product-detail-div">
        <div className="product-detail-div">
        <div className="product-detail-title-div">
            <h3>PRODUCT DETAILS - DEFAULT</h3>
        </div>
        <div className="product-detail-text-div">
            <p>Home - Shop - <span>  Product Details Default</span></p>
        </div>
        </div>
    </div>

    <div className="masterdiv">
        <div className="leftdiv">

        </div>
        <div className="rightdiv">
            
        </div>
    </div>

    </>
  )
}

export default ProductDetails
