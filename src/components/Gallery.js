import React from 'react'



const Gallery = () => {
    let images = [];

    for(let i = 1; i <= 8; i++){
        images.push(require(`../assets/images/grid/img${i}.jpg`));
    }
  return (
    <div className='Gallery'>
        <h3>Our creations</h3>
        <div className="images">
            {images.map(image => (
                <img src={image} alt="" />
            ))}
        </div>
    </div>
  )
}

export default Gallery