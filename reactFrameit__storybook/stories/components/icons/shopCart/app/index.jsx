import react, { useState } from 'react';
import './style.scss';

const IconShopCart = ( { addedTo = 1 , clicked = ( ) => console.log('clicked') } ) => {

    const clickedMethod = ( state ) => {
        clicked( state );
    }

    return (
        <div className="rf_icon_shopcart noHighlight" onClick={ ( ) => clickedMethod( !clickedState ) }>
              { addedTo > 0 && <span className={'rF_i_sc_items'}> <h3> { addedTo } </h3> </span> }
              <span className="material-icons-outlined"> shopping_bag </span>
        </div>
    )
}

export default IconShopCart;