import React from 'react'
import image from "../assets/images/image-interactive.jpg";

const SectionOne = () => {
  return (
    <div className='SectionOne'>
        <img src={image} alt="" />
        <div className="text">
            <h3>The leader in interactive vr</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sed eius incidunt tempore distinctio eum nemo voluptatum itaque ipsum! Soluta aliquid, nostrum modi deleniti similique ratione molestiae iure quisquam at?</p>
        </div>
    </div>
  )
}

export default SectionOne