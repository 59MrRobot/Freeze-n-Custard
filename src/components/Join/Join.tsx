import React from 'react';
import './Join.scss';

export const Join: React.FC = () => {
  return (
    <section className='join' id="join-us">
      <div className="join__wrapper">
        <div className='join__image'></div>

        <div>
          <h2 className='join__title'>Join Our Team!</h2>

          <p className='join__text'>
            Passionate about desserts? <a href='/' className='join__link'>We're hiring</a>. Become part of the <span className="name">Freeze 'n Custard</span> family.
          </p>
        </div>
      </div>
    </section>
  )
}