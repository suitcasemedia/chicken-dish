import React from 'react'


const MainContent = props =>{
    const {introduction, title, subtitle, directions, ingredients,fact} = props
    return(
        <div className="main-content col-12 col-md-4 col-lg-5">
            <div className="container">
                <div className="row">
                    <h1> {title}</h1>
                    <h2>{subtitle}</h2>
                </div>
                <div className="row">
                    <p><i>{introduction}</i></p>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6><i>Directions</i></h6>
                        <ol>
                            {directions.map(direction =>{
                                return(
                                    <li>{direction}</li>
                                )
                               
                            })}
                        </ol>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h6><i>Ingredients</i></h6>
                        <ul>
                            {ingredients.map(ingredient=>{
                                return(
                                    <li>{ingredient}</li>
                                )
                               
                            })}
                        </ul>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-12 col-md-6">
                    </div>
                </div>
                <hr/>
                <div className="row">
                <div className="col-12 col-md-6 ">
                       
                    </div>
                <div className="col-12 col-md-6 ">
                        {fact}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent