import React from 'react'
import chicken from '../images/chicken.jpg';

const PicturePanel = props =>{
    return(
        <div  style={{backgroundImage: `url(${chicken}) `, backgroundSize: 'cover'}} className="picture-panel col-12 col-md-4 col-lg-5">
            
        </div>
    )
}

export default PicturePanel