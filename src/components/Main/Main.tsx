import React from 'react';
import './Main.scss';
import IcecreamIcon from '@mui/icons-material/Icecream';
import YardIcon from '@mui/icons-material/Yard';
import PaletteIcon from '@mui/icons-material/Palette';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RecyclingIcon from '@mui/icons-material/Recycling';
import FrozenCustard from './frozen-custard.webp';

export const Main: React.FC = React.memo(
  () => {
    return (
      <section className='main'>
        <div className='main__wrapper'>
          <div className='main__container'>
            <h1 className='main__title'>
              Welcome to Freeze 'n Custard: The Ultimate Frozen Custard Experience!
            </h1>

            <img
              src={FrozenCustard}
              alt="top view of frozen custard"
              className='main__image'
              loading='eager'
            />
          </div>

          <div className='container' id="about">
            <div className='container__item'>
              <IcecreamIcon sx={{ fontSize: 60, color: '#F7E0E3' }} />

              <div>
                <p className='container__item-title'>
                  Unparalleled Creaminess:
                </p>
                
                <p>
                  Dive into the silkiest, richest, and most luxurious frozen custard you've ever tasted. Every scoop feels like a decadent embrace.
                </p>
              </div>
            </div>

            <div className='container__item'>
              <YardIcon sx={{ fontSize: 60, color: '#F7E0E3' }} />

              <div>
                <p className='container__item-title'>
                  Pure & Simple Ingredients:
                </p>
                
                <p>
                  We believe in simplicity. That's why our custard is crafted from the finest natural ingredients – farm-fresh cream, pure cane sugar, and golden egg yolks.
                </p>
              </div>
            </div>

            <div className='container__item'>
              <PaletteIcon sx={{ fontSize: 60, color: '#F7E0E3' }} />

              <div>
                <p className='container__item-title'>
                  Flavors Beyond Imagination:
                </p>
                
                <p>
                  From the classic vanilla bean to exotic tropical delights, embark on a journey of flavours that tease the palate and leave you craving more.
                </p>
              </div>
            </div>

            <div className='container__item'>
              <VolunteerActivismIcon sx={{ fontSize: 60, color: '#F7E0E3' }} />

              <div>
                <p className='container__item-title'>
                  A Legacy of Craftsmanship:
                </p>
                
                <p>
                  Our custard-making tradition goes back decades. Perfected over generations, our secret recipe is a testament to our passion for the craft.
                </p>
              </div>
            </div>

            <div className='container__item'>
              <RecyclingIcon sx={{ fontSize: 60, color: '#F7E0E3' }} />

              <div>
                <p className='container__item-title'>
                  Sustainability Matters:
                </p>

                <p>
                  We source our ingredients ethically, reducing our carbon footprint. Enjoying Frosty Delight means supporting a brighter, greener future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
)