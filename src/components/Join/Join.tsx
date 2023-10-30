import React from 'react';
import './Join.scss';
import { Link } from 'react-router-dom';

export const Join: React.FC = React.memo(
  () => {
    return (
      <section className='join' id="join-us">
        <div className="join__wrapper">
          <div className='join__image'></div>

          <div>
            <h2 className='title join__title'>Join Our Team!</h2>

            <p className='join__text'>
              Passionate about desserts? <Link to='/' className='join__link'>We're hiring</Link>. Become part of the <span className="name">Freeze 'n Custard</span> family.
            </p>
          </div>
        </div>
      </section>
    )
  }
)