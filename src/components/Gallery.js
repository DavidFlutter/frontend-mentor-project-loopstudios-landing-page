import React from 'react'



const Gallery = () => {
    let images = [];
    const imageTags = [
        "Deep earth",
        "Night arcade",
        "Soccer team",
        "The grid",
        "From above vr",
        "Pocket borealis",
        "The curiosty",
        "Make it fisheye"
    ]

    for(let i = 1; i <= 8; i++){
        images.push(require(`../assets/images/grid/img${i}.jpg`));
    }
  return (
    <div className='Gallery'>
        <h3>Our creations</h3>
        <div className="images">
            {images.map((image,index) => (
                <div key={index} className="image-div">
                    <img src={image} alt="" />
                    <h3>{imageTags[index]}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Gallery