import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Creations } from './components/Creations';
import { Visit } from './components/Visit';
import { Reviews } from './components/Reviews';
import { Join } from './components/Join';

const App: React.FC = () => {
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

        

        

        <p>
          Enjoy responsibly. Every moment with
          <span className="name"> Freeze 'n Custard</span> is a celebration.
        </p>
    </div>
  );
}

export default App;
