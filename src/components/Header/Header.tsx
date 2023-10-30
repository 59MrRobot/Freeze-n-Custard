import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header: React.FC = React.memo(
  () => {
    return (
      <header className='header' id='header'>
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            className="logo"
          />
        </Link>

        <nav className='nav'>
          <ul className='list'>
              <a href="#about" className='nav__link'>
                <li className='list__item'>About</li>
              </a>
              <a href="#creations" className='nav__link'>
                <li className='list__item'>Signature Creations</li>
              </a>
              <a href="#visit-us" className='nav__link'>
                <li className='list__item'>Visit Us</li>
              </a>
              <a href="#reviews" className='nav__link'>
                <li className='list__item'>Reviews</li>
              </a>
              <a href="#join-us" className='nav__link'>
                <li className='list__item'>Join Us</li>
              </a>
            </ul>
        </nav>
      </header>
    )
  }
)