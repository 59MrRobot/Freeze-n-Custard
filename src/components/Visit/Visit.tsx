import React from 'react';
import './Visit.scss';

export const Visit: React.FC = () => {
  return (
    <section className='visit' id="visit-us">
      <div className='visit__wrapper'>
        <h2 className='visit__title'>Visit Us Today!</h2>

        <p>Dive into the world of Frosty Delight and discover why our frozen custard is the talk of the town.</p>

        <p>[🛍️ Shop Now] [📍 Store Locator]</p>

        <div className='visit__newsletter'>
          <h3 className='visit__newsletter-title'>Join the newsletter!</h3>

          <p>Subscribe to get the latest frosty news by email.</p>

          <form className='form' onSubmit={(event) => event.preventDefault()}>
            <input
              type="text"
              name="name"
              id="name"
              className='form__input'
              placeholder='Your first name'
            />
            <input
              type="text"
              name="email"
              id="email"
              className='form__input'
              placeholder='Your email address'
            />
            <input
              type="submit"
              value="Subscribe"
              className='form__button'
            />
          </form>
        </div>
      </div>
  </section>
  )
}