import React from 'react'


const LeftSideBar = props =>{
    const{  
            preparationTime,
            cookTimer,
            readyIn,
            calories,
            totalFat,
            cholesterol,
    } = props;
    return(
        <div className="left-side-bar col-12 col-md-3 col-lg-2">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-4">
                     
                        <p><i>Prep Time:</i><br/>{preparationTime}</p>
                        <p><i>CookTime:</i><br/>{cookTimer}</p>
                        <p><i>Ready In:</i><br/>{readyIn}</p>
                        <p><i>Calories</i><br/>{calories}</p>
                        <p><i>Total Fat</i><br/>{totalFat}</p>
                        <p><i>Cholesterol</i><br/>{cholesterol}</p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default LeftSideBar