import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className='header' id='header'>
      <a href="/">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="logo"
          className="logo"
        />
      </a>

      <nav className='nav'>
        <ul className='list'>
            <a href="/" className='nav__link'>
              <li className='list__item'>About</li>
            </a>
            <a href="/" className='nav__link'>
              <li className='list__item'>Signature Creations</li>
            </a>
            <a href="/" className='nav__link'>
              <li className='list__item'>Visit Us</li>
            </a>
            <a href="/" className='nav__link'>
              <li className='list__item'>Reviews</li>
            </a>
            <a href="/" className='nav__link'>
              <li className='list__item'>Join Us</li>
            </a>
          </ul>
      </nav>
  </header>
  )
}