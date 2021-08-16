import React , { useContext } from 'react';
import { NavigationContext } from '../../_contexts/navigateContext';
import { routesLess } from '../../appRoutes';
import './component_style.scss';

const NavMenu = ( ) => {

   const { setCurrentNavigation } = useContext( NavigationContext );

    return (
      <div className="nav_container">
          <div className="nav_menu">
              <ul>
                  { routesLess.map( ( item , index ) =>
                    <li key={ `${index}-${ item }` } onClick={ () => setCurrentNavigation( index ) }>
                      <div className="menu_icon">
                          <i className={ item.icon } > </i>
                      </div>
                      <div className="menu_title">
                          <h3> { item.title } </h3>
                      </div>
                    </li>
                  )}
              </ul>
          </div>
      </div>
    )
}

export default NavMenu;
