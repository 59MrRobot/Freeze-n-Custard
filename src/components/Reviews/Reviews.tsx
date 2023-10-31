import React from 'react';
import './Reviews.scss';

export const Reviews: React.FC = React.memo(
  () => {
    return (
      <section className='reviews' id="reviews">
        <div className="reviews__wrapper">
          <h2 className='title reviews__title'>Reviews:</h2>

          <div className='reviews__container'>
            <div className="review">
              ⭐⭐⭐⭐⭐

              <p className="review__text">
                "The creamiest custard I've ever had! Every flavor is a new adventure."
              </p>

              <p className="review__name">
                - Jordan T.
              </p>
            </div>

            <div className="review">
              ⭐⭐⭐⭐⭐

              <p className="review__text">
                "Absolutely obsessed. I can't imagine summer without it!"
              </p>

              <p className="review__name">
                - Mia K.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
)