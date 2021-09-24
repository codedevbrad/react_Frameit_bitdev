
import React, { useState, useEffect, useRef } from 'react';

import Chevron from '../../icons/chevron.js';
import ArrowLeft from '../../icons/arrow.js';

import { CSSTransition } from 'react-transition-group';

import './style.scss';
import '../icon_styles.css';


function Dropdown ( { toplevel , submenus , timeout = 500 , theme = 'dark' , classNames , ...props } ) {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    function DropdownItem( { children , leftIcon , rightIcon , goToMenu } ) {
        return (
            <div className="menu-item size" onClick={ () => goToMenu && setActiveMenu( goToMenu ) }>

                { leftIcon !== false &&
                    <span className={`reactFrameit-dp-icon reactFrameit-dp-fb-icon-${ theme === 'dark' ? 'light' : 'dark' }`}>
                        { leftIcon }
                    </span> 
                } 

                <div className="menu-item-text">
                    { children } 
                </div>
                 

                { rightIcon &&
                    <span className={`reactFrameit-dp-icon-right reactFrameit-dp-fb-icon-${ theme === 'dark' ? 'light' : 'dark' }`}>
                        <Chevron />
                    </span> 
                }
            </div>
        );
    }

    useEffect( ( ) => {
       
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [ ] )
  
    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height ); 
    }
    
    return (
        <div className={`${ classNames } reactFrameit_dropdown_facebook reactFrameit_dropdown_facebook-${ theme }`} style={{ height: menuHeight }} ref={dropdownRef} { ...props } >

            <CSSTransition in={ activeMenu === 'main' } timeout={ timeout } classNames="menu-primary" unmountOnExit onEnter={calcHeight}>
                <div className="df-menu size">
                    { toplevel.map( ( { icon , name , goto } , index ) =>
                        <DropdownItem key={ index } leftIcon={ icon ? icon : false } goToMenu={ goto ? goto : '' } rightIcon={ goto ? true : false }>
                                { name }
                        </DropdownItem>
                    )}
                </div>
            </CSSTransition>

            { submenus.map( ( { title , items } , index ) => 
                 <CSSTransition in={ activeMenu === title } timeout={ timeout } classNames="menu-secondary" unmountOnExit onEnter={calcHeight} key={ index }>
                    <div className="df-menu">

                            <DropdownItem goToMenu="main" leftIcon={ <ArrowLeft /> }>
                                <h2 className="df-title"> { title } </h2>
                            </DropdownItem>

                            { items.map( ( { icon , name } ) =>
                                <DropdownItem leftIcon={ icon }>
                                        { name }
                                </DropdownItem>
                            )}
                    </div>
                </CSSTransition>     
            )}
        </div>
    );
}


export default Dropdown;