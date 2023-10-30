import React, { useState } from 'react';
import './Creations.scss';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Caramel from './caramel.webp';
import CaramelTexture from './caramel-texture.webp';
import Tropical from './tropical.webp';
import TropicalTexture from './tropical-texture.webp';
import Velvet from './velvet.webp';
import VelvetTexture from './velvet-texture.webp';

export const Creations: React.FC = React.memo(
  () => {
    const [index, setIndex] = useState(0);

    return (
      <section className='creations' id="creations">
        <div className="creations__wrapper">
          <h2 className="title creations__title">Try Our Signature Creations!</h2>

          <div className='creations__container'>
            <div className='creations__container-background'>
              <img
                src={index === 0 ? CaramelTexture : index === 1 ? TropicalTexture : VelvetTexture}
                alt=""
                className='creations__container-texture'
              />
            </div>
            
            <div className='creations__container-content'>
              <NavigateBeforeIcon
                sx={{
                  fontSize: "64px",
                  marginRight: "16px",
                  cursor: "pointer",
                  color: "#A9D1EA"
                }}
                onClick={() => index > 0 ? setIndex(index - 1) : setIndex(0)}
              />

              <div
                className={`creation ${index === 0 ? 'creation--show' : 'creation--hide'}`}
              >
                <div className='creation__text'>
                  <p className='creation__text-title'>Golden Caramel Crunch:</p>

                  <p>
                    A delightful blend of rich custard with swirls of homemade caramel and crunchy praline pieces.
                  </p>
                </div>

                <img
                  src={Caramel}
                  alt="caramel crunch frozen custard"
                  className='creation__image'
                />
              </div>

              <div
                className={`creation ${index === 1 ? 'creation--show' : 'creation--hide'}`}
              >
                <div className='creation__text'>
                  <p className='creation__text-title'>
                    Tropical Passionfruit Bliss:
                  </p>

                  <p>
                    Dive into summer any time of the year with our exotic passionfruit custard dotted with fresh mango chunks.
                  </p>
                </div>

                <img
                  src={Tropical}
                  alt="tropical passionfruit frozen custard"
                  className='creation__image'
                />
              </div>

              <div
                className={`creation ${index === 2 ? 'creation--show' : 'creation--hide'}`}
              >
                <div className='creation__text'>
                  <p className='creation__text-title'>
                    Velvety Chocolate Truffle:
                  </p>

                  <p>
                    For the ultimate chocolate lover, dive into deep, dark chocolate custard with soft truffle bites.
                  </p>
                </div>

                <img
                  src={Velvet}
                  alt="chocolate truffle frozen custard"
                  className='creation__image'
                />
              </div>

              <NavigateNextIcon
                sx={{
                  fontSize: "64px",
                  marginLeft: "16px",
                  cursor: "pointer",
                  color: "#A9D1EA"
                }}
                onClick={() => index < 2 ? setIndex(index + 1) : setIndex(2)}
              />
            </div>
          </div>

          <div className='creations__text'>
            <p className='creations__text-title'>Special Offers:</p>
            
            <p>
              Join our Frosty Club and enjoy exclusive deals, early access to new flavors, and a free scoop on your birthday!
            </p>
          </div>
        </div>
      </section>
    )
  }
)