import React from 'react'
import {AiFillFacebook, AiFillLinkedin, AiTwotoneMail, AiFillTwitterCircle} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="wrapper">
            <div className="left">
                <h3>loopstudio</h3>
                <nav>
                    <span>About</span>
                    <span>Contact</span>
                    <span>Product</span>
                    <span>Support</span>
                </nav>
            </div>
            <div className="right">
                <button>
                    <AiFillTwitterCircle></AiFillTwitterCircle>
                </button>
                <button>
                    <AiFillFacebook></AiFillFacebook>
                </button>
                <button>
                    <AiFillLinkedin></AiFillLinkedin>
                </button>
                <button>
                    <AiTwotoneMail></AiTwotoneMail>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer