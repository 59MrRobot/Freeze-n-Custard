import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Creations } from './components/Creations';
import { Visit } from './components/Visit';
import { Reviews } from './components/Reviews';
import { Join } from './components/Join';
import { Footer } from './components/Footer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const App: React.FC = () => {
  let button = document.getElementById("button");

  window.onscroll = function() { scrollFunction() };

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button!.style.display = "flex";
    } else {
      button!.style.display = "none";
    }
  }

  const handleClickScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="App">
      <Header />

      <main>
        <Main />

        <Creations />

        <Visit />

        <Reviews />

        <Join />
      </main>

      <button
        className='back-to-top'
        onClick={handleClickScroll}
        id="button">
        <KeyboardArrowUpIcon sx={{ color: "#000" }} />
      </button>

      <Footer />
    </div>
  );
}

export default App;
