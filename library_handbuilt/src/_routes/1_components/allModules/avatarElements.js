import React from 'react';
import { AvatarElement } from '../@codedevbrad_react_frameit/index';

const AvatarElementShowcase = ( ) => {
    return (
        <div className="eachComponent_showcase showcase_avatarShowcase">
            <section>
              <code>
                {
  `
  <AvatarElement avatarIcon={ 'https://api.adorable.io/avatars/285/bradley lumber.png' }
                 avatarName={ 'bradley lumber' }
                     border={ 'rounded' }
             iconDimensions={ { width: '40px' , height: '40px' } }
  />
  `
                }
              </code>

              <AvatarElement avatarIcon={ 'https://api.adorable.io/avatars/285/bradley lumber.png' }
                             avatarName={ 'bradley lumber' }
                                 border={ 'rounded' }
                         iconDimensions={ { width: '40px' , height: '40px' } }
              />

            </section>
        </div>
    )
}

export default AvatarElementShowcase;
