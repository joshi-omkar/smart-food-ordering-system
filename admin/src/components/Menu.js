import React, { useState } from 'react'
import MenuCategories from './MenuCategories'
import MenuItemContainer from './MenuItemContainer'
import '../Styles/MenuCategories.css'

const Menu = () => {
  const [currentCategory, setCurrentCategory] = useState("");

  
  return (
    <div className='Menu'>  
        <MenuCategories setCurrentCategory={setCurrentCategory}/>
        <MenuItemContainer currentCategory={currentCategory}/>
    </div>
  )
}

export default Menu