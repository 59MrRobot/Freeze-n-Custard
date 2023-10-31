import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  screenSize: screenSize;
}

export const Header: React.FC<Props> = React.memo(
  (screenSize) => {
    const [showMenu, setShowMenu] = useState(false);
    const {
      width
    } = screenSize.screenSize;

    const html = document.getElementById('html');

    useEffect(() => {
      if (html && width < 600 && showMenu) {
        html.style.overflow = 'hidden';
      } else {
        html!.style.overflow = 'scroll';
      }
    }, [html, showMenu, width]);

    return (
      <header className='header' id='header'>
        {!showMenu && (
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
              className="logo"
            />
          </Link>
        )}

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

        {!showMenu && (
          <div className='header__open-menu'>
            <MenuIcon
              sx={{ cursor: 'pointer' }}
              onClick={() => setShowMenu(true)}
            />
          </div>
        )}
        
        <div className={`menu menu--${showMenu ? 'show' : 'hide'}`}>
          <div className='menu__controls'>
            <Link to="/" onClick={() => setShowMenu(false)}>
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
                className="logo"
              />
            </Link>

            {showMenu && (
              <CloseIcon
                sx={{ cursor: 'pointer' }}
                onClick={() => setShowMenu(false)}
              />
            )}
          </div>

          <nav className='nav nav--mobile'>
            <ul className='list list--mobile'>
                <HashLink to="/#about" className='nav__link'>
                  <li className='list__item' onClick={() => setShowMenu(false)}>
                    About
                  </li>
                </HashLink>
                <HashLink to="/#creations" className='nav__link'>
                  <li className='list__item' onClick={() => setShowMenu(false)}>
                    Signature Creations
                  </li>
                </HashLink>
                <HashLink to="/#visit-us" className='nav__link'>
                  <li className='list__item' onClick={() => setShowMenu(false)}>
                    Visit Us
                  </li>
                </HashLink>
                <HashLink to="/#reviews" className='nav__link'>
                  <li className='list__item' onClick={() => setShowMenu(false)}>
                    Reviews
                  </li>
                </HashLink>
                <HashLink to="/#join-us" className='nav__link'>
                  <li className='list__item' onClick={() => setShowMenu(false)}>
                    Join Us
                  </li>
                </HashLink>
              </ul>
          </nav>
        </div>
      </header>
    )
  }
)