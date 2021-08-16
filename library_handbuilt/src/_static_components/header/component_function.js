import React , { useEffect , useState  } from 'react';
import { appJson } from '../../appInfo.js';

import HamburgerToggle from './hamburger';

import './component_styles.scss';

const Header = ( ) => {

    return (
      <header className="app_header">

          <div className="header-title">
            <div>
                <img src={ appJson.appImage } />
            </div>
            <h1> { appJson.title } </h1>
          </div>

          <div className="header-social">
              <ul>
                 <HamburgerToggle container={ 'li' } className={ 'header_hamburger' }/>
              </ul>
          </div>

      </header>
    )
}

export default Header;
