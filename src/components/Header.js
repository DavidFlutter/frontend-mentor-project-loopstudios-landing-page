import React from 'react'
import {AiOutlineMenu} from "react-icons/ai";

const Header = () => {
  return (
    <div className='Header'>
        <h1>loopstudio</h1>
        <button className="menu-btn">
          <AiOutlineMenu></AiOutlineMenu>
        </button>
        <nav>
            <span>About</span>
            <span>Contact</span>
            <span>Products</span>
            <span>Support</span>
        </nav>
    </div>
  )
}

export default Header