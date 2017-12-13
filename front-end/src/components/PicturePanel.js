import React from 'react'
import chicken from '../images/chicken.jpg';

const PicturePanel = props =>{
    return(
        <div  style={{backgroundImage: `url(${chicken}) `, backgroundSize: 'cover'}} className="picture-panel col-6">
            <h1> hello</h1>
        </div>
    )
}

export default PicturePanel