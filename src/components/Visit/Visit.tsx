import React, { useEffect, useState } from 'react';
import './Visit.scss';

interface Props {
  screenSize: screenSize;
}

export const Visit: React.FC<Props> = React.memo(
  (screenSize) => {
    const {
      width
    } = screenSize.screenSize;

    return (
      <section className='visit' id="visit-us">
        <div className='visit__wrapper'>
          <h2 className='title visit__title'>Visit Us Today!</h2>

          <p>Dive into the world of Frosty Delight and discover why our frozen custard is the talk of the town.</p>

          <div className="visit__container">
            <iframe
              src="https://locatestore.com/yK8Abo"
              style={{
                border: "none",
                width: width < 1024 ? "100%" : "50%",
                height: width < 1024 ? "500px" : "auto"
              }}
              allow="geolocation"
              title="map"
            ></iframe>

            <div className='visit__newsletter'>
              <div>
                <h3 className='visit__newsletter-title'>Join the newsletter!</h3>

                <p>Subscribe to get the latest frosty news by email.</p>
              </div>

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
        </div>
      </section>
    )
  }
)