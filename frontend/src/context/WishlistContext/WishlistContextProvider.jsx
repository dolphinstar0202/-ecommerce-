import React from "react";
import WishlistPanelContext from "./WishlistContext";

const WishlistContextProvider = ({children}) => {
    const [wishlist, setWishlist] = React.useState([])

    return(
        <WishlistPanelContext.Provider value={{wishlist, setWishlist}} >
            {children}
        </WishlistPanelContext.Provider>
    )
}

export default WishlistContextProvider;
