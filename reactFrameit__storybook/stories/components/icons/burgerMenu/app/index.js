import React, { useState , useEffect } from "react";
import Theme from '../../../components/colorTheme/app/index';
import './style.scss';

import BurgerA from './burgerA';


const convert = ( size ) => {
    switch ( size ) {
        case 's':
            return 35;
        case 's-m':
            return 45;
        case 'm':
            return 55;
        case 'm-l':
            return 70;
        case 'l':
            return 85;
        
        default:
            return size;
    }
}


const MenuBurger = ( 
    { themeMode = 'dark', sizing = 'm', classNames = '', state = false , type = 1 , 
      isClicked = ( ) => console.log('method not set') 
    } 
) => {

    const [ clicked , toggle ] = useState( false );
    const [ sizeConverted , setConvertSize ] = useState( 50 );

    const handleClick = ( ) => {
        toggle( !clicked );
        isClicked( !clicked );
    }

    useEffect( ( ) => {
            toggle( state );
            setConvertSize( convert( sizing ) );
    } , [ state , sizing ] );

    return (
        <div className={`reactFrameit__menuBurger ${ classNames }`} onClick={ ( ) => handleClick( ) }>
            <Theme themeMode={ themeMode } br={ true }>
                    { type == 1 && <BurgerA state={ clicked } sizing={ sizeConverted } /> } 
            </Theme>
        </div>
    )
}

export default MenuBurger;