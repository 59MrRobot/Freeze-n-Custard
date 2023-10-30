import React from 'react';
import './Footer.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className="footer__wrapper">
        <p>
          Enjoy responsibly. Every moment with
          <span className="name"> Freeze 'n Custard</span> is a celebration.
        </p>

        <div className='footer__socials'>
          <div className="footer__socials-icon">
            <LinkedInIcon sx={{ fontSize: '32px' }}/>
          </div>


          <div className="footer__socials-icon">
            <InstagramIcon sx={{ fontSize: '32px' }}/>
          </div>


          <div className="footer__socials-icon">
            <TwitterIcon sx={{ fontSize: '32px' }}/>
          </div>
          

          <div className="footer__socials-icon">
            <PinterestIcon sx={{ fontSize: '32px' }}/>
          </div>
        </div>
      </div>
    </footer>
  )
}