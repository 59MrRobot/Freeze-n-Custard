import React, { useEffect, useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Creations } from './components/Creations';
import { Visit } from './components/Visit';
import { Reviews } from './components/Reviews';
import { Join } from './components/Join';
import { Footer } from './components/Footer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function getCurrentDimension(){
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  window.onscroll = function() { scrollFunction() };

  const handleClickScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="App">
      <Header screenSize={screenSize} />

      <main>
        <Main />

        <Creations screenSize={screenSize} />

        <Visit screenSize={screenSize} />

        <Reviews />

        <Join />
      </main>
 
      <button
        className='back-to-top'
        onClick={handleClickScroll}
        id="button"
        style={{ visibility: visible ? 'visible' : 'hidden' }}
      >
        <KeyboardArrowUpIcon sx={{ color: "#000" }} />
      </button>

      <Footer />
    </div>
  );
}

export default App;
