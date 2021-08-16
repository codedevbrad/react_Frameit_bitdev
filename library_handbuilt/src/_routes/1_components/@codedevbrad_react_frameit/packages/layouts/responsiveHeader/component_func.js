
import React , { Fragment , useState , useEffect } from 'react';
import { AvatarElement , Dropdown } from '../../../index';
import { HamburgerIcon , ShevronDownIcon } from '../../../packages_util/svgIcons/index';

import { getCurrScreen } from '../../../packages_util/util.detectBrowserViewport';

// bring modal in for medium and small navigation ..

import './component_styles.scss';


const HeaderResponsive = ( { headerTitle , children , l , m , s  } ) => {

   const [  screenClass , setSceeenClass ] = useState( '' );
   const [ openNavigate , toggleNavigate ] = useState( false );

    useEffect( ( ) => {
          let screen = getCurrScreen( l , m , s );
          setSceeenClass( screen );
    } , [ ] );

    return (
      <Fragment>
          <header className={`reactFrameit__header_module ${ screenClass }`}>
                <div className="reactFrameit__header_module__header-title">
                    { headerTitle }
                </div>

                <nav className="reactFrameit__header_module__header-navigation">
                    { children }
                </nav>

                <div className="reactFrameit__header_module__header_social">
                    <AvatarElement avatarIcon={ 'https://api.adorable.io/avatars/285/bradley lumber.png' }
                                   avatarName={ '' }
                                       border={ 'rounded' }
                               iconDimensions={ { width: '40px' , height: '40px' } }
                    />

                    <Dropdown dropdownText={ 'bradley Lumber' } direction={ 'right' }
                            style_override={ 'dropdown__1' }>
                        <li> first element   </li>
                        <li> secrond element </li>
                        <li> third element   </li>
                    </Dropdown>
                </div>
          </header>
      </Fragment>
    )
}

export default HeaderResponsive;

//  <div className="reactFrameit__header_module__header-toggle" onClick={ ( ) => toggleNavigate( !openNavigate ) }>
//     <HamburgerIcon Uniquestyle={ { height: '30px' } }/>
// </div>
