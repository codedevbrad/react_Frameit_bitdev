import React, { useState , useEffect } from "react"
import './style.scss';

import BurgerA from './burgerA';

const MenuBurger = ( { state = false , type = 1 , isClicked = ( ) => console.log('method not set') } ) => {

    const [ clicked , toggle ] = useState( false );

    const handleClick = ( ) => {
        toggle( !clicked );
        isClicked( !clicked );
    }

    useEffect( ( ) => {
            toggle( state );
    } , [ state ] );

    return (
        <div className={'reactFrameit__menuBurger'} onClick={ ( ) => handleClick( ) }>

            { type == 1 && <BurgerA state={ clicked } /> }
        </div>
    )
}

export default MenuBurger;