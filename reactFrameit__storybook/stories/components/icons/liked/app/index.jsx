import react, { useState } from 'react';
import './style.scss';


const IconLiked = ( { clicked = ( ) => console.log('clicked') } ) => {

    const [ clickedState , wasClicked ] = useState( false );

    const clickedMethod = ( state ) => {
        wasClicked( state );
        clicked( state );
    }

    return (
        <div className="rf_icon_liked noHighlight" onClick={ ( ) => clickedMethod( !clickedState ) }>
                { clickedState ? 
                    <span className="material-icons-outlined"> favorite </span>
                    :
                    <span className="material-icons-outlined"> favorite_border </span>
                } 
        </div>
    )
}

export default IconLiked;