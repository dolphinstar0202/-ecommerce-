import React from 'react'
import WishlistPanelContext from './WishlistPanelContext';


const WishlistPanelContextProvider = ({children}) => {

    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <WishlistPanelContext.Provider value={{isOpen, setIsOpen}} >
        {children}
    </WishlistPanelContext.Provider>
  )
}

export default WishlistPanelContextProvider
