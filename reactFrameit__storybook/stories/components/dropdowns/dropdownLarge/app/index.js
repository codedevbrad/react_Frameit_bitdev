import React, { useState } from 'react';
import './style.scss';

const DropdownLarge = ( { top , menuItems } ) => {

    const [ menuShow , setMenu ] = useState( false, [ ] );
    const [ lastClicked , setLast ] = useState( false );

    const toggleMenu = ( item , currPosition ) => {
        
        if ( item.subMenu && !menuShow[1] ) {
            setMenu( [ true , item.subMenu ]);
        }

        else if ( !item.subMenu || lastClicked === currPosition ) {
            setMenu( [ false , false ]);
        }
        
        setLast( currPosition );
    }

    return ( 
        <div className="reactFrameit_dropdownLarge">
                <div className="rF_dL__topItems">
                    <ul>
                        { menuItems.map(( list , index ) =>
                            <li onClick={ ( ) => toggleMenu( list , index ) }> 

                                { list.link ? 
                                         <a href={ list.link } className={'rF_dL_tI_navItem_a'}> { list.item } </a> 
                                         : 
                                         <span className={'rF_dL_tI_navItem_p'}> { list.item } </span> 
                                }
                                   
                                { list.subMenu && 
                                        <span className="rf_dL_tI__arrow">
                                            <span className="material-icons-outlined"> expand_more </span>
                                        </span>
                                }
                            </li>
                        )}
                    </ul>
                </div>
                { menuShow[0] &&
                    <div className="rF_dL__menuItemsContainer" style={{ top: top }}>                            
                            <>
                                { menuShow[1] }
                            </>                      
                    </div> 
                }
        </div>
     ); 
}

export default DropdownLarge;