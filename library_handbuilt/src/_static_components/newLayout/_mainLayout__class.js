import React , { useEffect , useState } from 'react';
import { getCurrScreen } from './util.detectBrowserViewport';
import NavMenu from '../navbar/component_function';

import './_mainLayout__style.scss';

const AppMain = ( { header , sideBar , mainSection , layoutClass } ) => {

      const [ currResponsive_class , setClass ] = useState('');

      let l = [ { max: '1920px' , min: '900px' } , 'responsive_large'  ] ,
          m = [ { max: '899px'  , min: '301px' } , 'responsive_medium' ] ,
          s = [ { max: '300px'  , min: '0px'   } , 'responsive_small'  ]

      useEffect( ( ) => {
          let screen = getCurrScreen( l , m , s );
          setClass( screen );
          console.log( 'appMain' );
      } , [ ] );

    return (
         <div id='app__mainlayout' className={ `${ currResponsive_class} ${ layoutClass }` }>
              <div className="main__navigation">
                        <NavMenu />
              </div>
              <div className="main__dashboard_full">
                    <div className="dashboard__mainboard">
                        { header }
                        { mainSection }
                    </div>
                    <div className="dashboard__sidebar">
                        { sideBar }
                    </div>
              </div>
        </div>
    )
}

export default AppMain;
