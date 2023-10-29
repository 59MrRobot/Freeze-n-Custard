import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Creations } from './components/Creations';
import { Visit } from './components/Visit';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <Main />

        <Creations />

        <Visit />
      </main>

        <section>
          <h2>Reviews:</h2>

          <p>⭐⭐⭐⭐⭐ "The creamiest custard I've ever had! Every flavor is a new adventure." - Jordan T.</p>

          <p>⭐⭐⭐⭐⭐ "Absolutely obsessed. I can't imagine summer without it!" - Mia K.</p>
        </section>

        <section>
          <h2>👩‍🍳 Join Our Team!</h2>
          <p>
            Passionate about desserts? We're hiring. Become part of the <span className="name">Freeze 'n Custard</span> family.
          </p>
        </section>

        <p>
          Enjoy responsibly. Every moment with
          <span className="name"> Freeze 'n Custard</span> is a celebration.
        </p>
    </div>
  );
}

export default App;
