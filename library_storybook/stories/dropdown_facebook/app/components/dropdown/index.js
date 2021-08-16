
import React, { useState, useEffect, useRef } from 'react';

import NavItem from '../navItem/index.jsx';

import Chevron from '../../icons/chevron.js';
import ArrowLeft from '../../icons/arrow.js';

import { CSSTransition } from 'react-transition-group';

import './style.css';
import '../icon_styles.css';


function Dropdown ( { toplevel , submenus , timeout = 500 , ...props } ) {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    function DropdownItem( { children , leftIcon , rightIcon , goToMenu } ) {
        return (
            <div className="menu-item size" onClick={ () => goToMenu && setActiveMenu( goToMenu ) }>

                { leftIcon !== false &&
                    <span className="icon-button icon-left">
                        { leftIcon }
                    </span> 
                } 

                <div className="menu-item-text">
                    { children } 
                </div>
                 

                { rightIcon &&
                    <span className="icon-right">
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
        console.log( 'check' );
    }
    
    return (
        <div className="dropdown_facebook" style={{ height: menuHeight }} ref={dropdownRef} { ...props } >

            <CSSTransition in={ activeMenu === 'main' } timeout={ timeout } classNames="menu-primary" unmountOnExit onEnter={calcHeight}>
                <div className="menu size">
                    { toplevel.map( ( { icon , name , goto } ) =>
                        <DropdownItem leftIcon={ icon ? icon : false } goToMenu={ goto ? goto : '' } rightIcon={ goto ? true : false }>
                                { name }
                        </DropdownItem>
                    )}
                </div>
            </CSSTransition>

            { submenus.map( ( { title , items } ) => 
                 <CSSTransition in={ activeMenu === title } timeout={ timeout } classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
                    <div className="menu">

                            <DropdownItem goToMenu="main" leftIcon={ <ArrowLeft /> }>
                                <h2> { title } </h2>
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


const FacebookDropdown = ( { icon , ...props } ) => {
        return (
                <NavItem icon={ icon }>
                        <Dropdown  { ...props } />
                </NavItem>
        )
}

export default FacebookDropdown;