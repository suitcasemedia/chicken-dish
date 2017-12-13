import React, { Component } from 'react';
import logo from './logo.svg';
import './custom-scss/main.css';
import LeftSideBar from './components/LeftSideBar'
import PicturePanel from './components/PicturePanel'
import MainContent from './components/MainContent'
import content from './utils/content-data'
class App extends Component {
  render() {
    const{ title,
           subtitle, 
           introduction, 
           preparationTime,
           cookTimer,
           readyIn,
           calories,
           totalFat,
           cholesterol,
           directions,
           ingredients,
           fact} = content
    return (
      <div className="row">
         <LeftSideBar 
            preparationTime ={preparationTime}
            cookTimer={cookTimer}
            readyIn={readyIn}
            calories={calories}
            totalFat={totalFat}
            cholesterol={cholesterol}
            />
        <MainContent introduction={introduction} 
                     title={title} 
                     subtitle={subtitle}
                     directions={directions}
                     ingredients={ingredients}
                     fact={fact}/>
       
        <PicturePanel/>

          
      </div>
    );
  }
}

export default App;
