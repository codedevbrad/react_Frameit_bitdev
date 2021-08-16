import React from 'react';
import { HeaderResponsive , Dropdown } from '../@codedevbrad_react_frameit/index';

const HeaderResponsiveShowcase = ( ) => {
    return (
        <div className="eachComponent_showcase showcase_avatarShowcase">

          <section>
              <code>
{
`
<HeaderResponsive headerTitle={ 'header' }/>
`
}
              </code>

              <HeaderResponsive headerTitle={ 'header' }>

                    <ul>

                    <Dropdown dropdownText={ 'product' } direction={ 'left' }
                            style_override={ 'dropdown__1' }
                            tagName={ 'div' }>
                        <li> first element   </li>
                        <li> secrond element </li>
                        <li> third element   </li>
                    </Dropdown>

                    </ul>

              </HeaderResponsive >

            </section>
        </div>
    )
}

export default HeaderResponsiveShowcase;

/*
<header className={`reactFrameit__header_module ${ screenClass }`}>
          <div className="header-title">
              { headerTitle }
          </div>
          { screenClass == 'responsive_large' &&
            <nav className="header-navigation">
                { children }
            </nav>
          }
          { screenClass == 'responsive_medium' || screenClass == 'responsive_small' &&
            <div className="header-toggle" onClick={ ( ) => toggleNavigate( !openNavigate ) }>
                <HamburgerIcon />
            </div>
          }
      </header>
      { screenClass == 'responsive_medium' || screenClass == 'responsive_small' &&
            <div className="header-overlay">
                <nav className="header-navigation">
                    <span className="close">&times;</span>
                    <div className="header-navigation__items">
                    { children }
                    </div>
                </nav>
            </div>
      }
*/
