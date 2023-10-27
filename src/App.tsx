import React from 'react';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className='header'>
        <a href="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            className="logo"
          />
        </a>

        <ul className='list'>
          <li className='list__item'>About</li>
          <li className='list__item'>Signature Creations</li>
          <li className='list__item'>Visit Us</li>
          <li className='list__item'>Reviews</li>
          <li className='list__item'>Join Us</li>
        </ul>
      </header>
      <h1>
        Welcome to Freeze 'n Custard: The Ultimate Frozen Custard Experience!
      </h1>

      <section>
        <p>
          🍨 Unparalleled Creaminess: Dive into the silkiest, richest, and most luxurious frozen custard you've ever tasted. Every scoop feels like a decadent embrace.
        </p>

        <p>
          🌿 Pure & Simple Ingredients: We believe in simplicity. That's why our custard is crafted from the finest natural ingredients – farm-fresh cream, pure cane sugar, and golden egg yolks.
        </p>
          
        <p>
          🎨 Flavors Beyond Imagination: From the classic vanilla bean to exotic tropical delights, embark on a journey of flavours that tease the palate and leave you craving more.
        </p>
          
        <p>
          💖 A Legacy of Craftsmanship: Our custard-making tradition goes back decades. Perfected over generations, our secret recipe is a testament to our passion for the craft.
        </p>

        <p>
          🌍 Sustainability Matters: We source our ingredients ethically, reducing our carbon footprint. Enjoying Frosty Delight means supporting a brighter, greener future.
        </p>
      </section>
      
      <section>
          <h2>🍦 Try Our Signature Creations!</h2>

          <p>
            Golden Caramel Crunch: A delightful blend of rich custard with swirls of homemade caramel and crunchy praline pieces.
          </p>

          <p>
            Tropical Passionfruit Bliss: Dive into summer any time of the year with our exotic passionfruit custard dotted with fresh mango chunks.
          </p>

          <p>
            Velvety Chocolate Truffle: For the ultimate chocolate lover, dive into deep, dark chocolate custard with soft truffle bites.
          </p>

          <p>
            ✨ Special Offers: Join our Frosty Club and enjoy exclusive deals, early access to new flavors, and a free scoop on your birthday!
          </p>
        </section>

        <section>
          <h2>Visit Us Today!</h2>

          <p>Dive into the world of Frosty Delight and discover why our frozen custard is the talk of the town.</p>

          <p>[🛍️ Shop Now] [📍 Store Locator] [💌 Sign up for Frosty News]</p>
        </section>
         

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
