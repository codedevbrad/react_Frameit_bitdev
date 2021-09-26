import React, { useEffect, useState } from 'react';
import './style.scss';
import MenuBurger from '../../../icons/burgerMenu/app/index';

const OffcanvasNavigation = ({ state, side = 'left', children, menu, width }) => {

        let [ toggle , setToggle ] = useState(false);

        const clickedMenu = ( state ) => {
            setToggle( state );
        }

        useEffect(( ) => {
            setToggle( state );
        } , [ state ] );

        return (
            <div className="reactFrameit_offcanvas">
                   <div className={`rF_oc_inner`}>
                        <div className={`rF_oc_navigation rF_oc_nav__${ side }`} style={{ width: toggle ? width : 0 }}>
                            <ul>
                                { menu.map(( item, index ) =>
                                    <li key={ `rF_oc_index-${index}` }> 
                                        <a href={ item.link }> { item.name } </a>
                                    </li>
                                ) }
                            </ul>               
                        </div>
                        <div className="rF_oc_main" style={{
                            margin: toggle ? `${ side == 'left' ? `0 0 0 ${width}px` : `0 ${width}px 0 0 `}` : 0 }}
                        >
                            <header>
                                    <div className="rF_oc_main_h_title"> 
                                            title
                                    </div>
                                    <div className="rF_oc_main_h_menu">
                                            <MenuBurger state={ toggle } isClicked={ clickedMenu } type={ 1 } />
                                    </div>
                            </header>
                            { children }
                        </div>
                   </div>
            </div>
        )
}

export default OffcanvasNavigation;