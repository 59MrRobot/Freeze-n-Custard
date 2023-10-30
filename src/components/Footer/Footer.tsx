import React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className="footer__wrapper">
        <p>
          Enjoy responsibly. Every moment with
          <span className="name"> Freeze 'n Custard</span> is a celebration.
        </p>
      </div>
    </footer>
  )
}