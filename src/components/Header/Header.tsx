import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
              <HashLink to="/#about" className='nav__link'>
                <li className='list__item'>About</li>
              </HashLink>
              <HashLink to="/#creations" className='nav__link'>
                <li className='list__item'>Signature Creations</li>
              </HashLink>
              <HashLink to="/#visit-us" className='nav__link'>
                <li className='list__item'>Visit Us</li>
              </HashLink>
              <HashLink to="/#reviews" className='nav__link'>
                <li className='list__item'>Reviews</li>
              </HashLink>
              <HashLink to="/#join-us" className='nav__link'>
                <li className='list__item'>Join Us</li>
              </HashLink>
            </ul>
        </nav>
      </header>
    )
  }
)