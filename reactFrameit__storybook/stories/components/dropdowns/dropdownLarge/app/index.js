import React, { useState } from 'react';
import './style.scss';


const DropdownLarge = ( { top , menuItems } ) => {

    const [ menuShow , setMenu ] = useState( false, [ ] );

    const toggleMenu = ( item ) => {
        setMenu( [true , item.subMenu ]);
    }

    return ( 
        <div className="reactFrameit_dropdownLarge" >
                <div className="rF_dL__topItems">
                    <ul>
                        { menuItems.map(( list ) =>
                            <li onClick={ ( ) => toggleMenu( list )}> { list.item } </li>
                        )}
                    </ul>
                </div>
                <div className="rF_dL__menuItemsContainer" style={{ top: top }}>
                        { menuShow[0] &&
                            <>
                                { menuShow[1] }
                            </>
                        }
                </div>
        </div>
     ); 
}

export default DropdownLarge;