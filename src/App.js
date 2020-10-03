import React from 'react';

/* core */
import LightMainCard from './components/LightMainCard';
import useDarkMode from 'use-dark-mode';
import Phoneview from './components/PhoneView';
import WatchView from './components/WatchView';
import cr7 from './assets/cr7.png'
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";


/* style */
import './index.scss';

// const Card = [
//   {
//     type: 'Card1',
//   },
//   {
//     type: 'Card2',
//   },
// ];

const App = (type) => {
  const darkMode = useDarkMode(false);
  return (
    <div id='mainpage'>
      <div id="heading"style={{
        display:'flex',
        flexDirection: 'row',
        backgroundColor:'#1e2633'
      }}>
        <img alt="CR7" style={{
        width: '8vw',
        height: '8vw',
        marginLeft: '1vw',
        marginTop: '1vh',
      }} src={cr7} />

      <h1 style={{
        color:'#4ceddd',
        fontSize:'3vw',
      }}>
        CR7 Fitness App</h1>
        <div className="navbar-right" onClick={darkMode.toggle}
            style={{
            marginTop:'5vh',
            marginRight:'5vw',
            
          }}>
            {darkMode.value ? <BiMoon color="white" size='3vw' /> : <BsSun size='3vw' color="yellow"/>}
          </div> 

        </div>
      <div className='container'>
        <LightMainCard {...darkMode} />
        <Phoneview {...darkMode}/>
        <WatchView {...darkMode}/>
      </div>
    </div>
  );
};

export default App;
