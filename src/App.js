
import  React from 'react';

import './App.css';
import TitleAndIcons from './fullPage/TitleAndIcons';
import About from './fullPage/About';
import Skill from './fullPage/Skill';

function App() {
  
  return (
    <div className="App">
     <div className="navigation">
       <TitleAndIcons />
       <About />
       <Skill />
     </div>
    </div>
  )
}

export default App;
