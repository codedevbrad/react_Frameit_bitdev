import React, { useEffect, useRef, useState } from "react";
import './style.scss';


const ItemNav = ( { children , navigateBack , index } ) => {
    return (
        <div className="rF_tC_i__child">
            { index.current > 0 && 
                <div onClick={ ( ) => navigateBack( 0 ) } className={ 'rF_tC_i_c_backbutton' }> 
                    <span className="material-icons-outlined">  arrow_back </span>
                </div> 
            }
            { children }
        </div>
    )
}


const RenderMenu = ( { menu , navigateTo } ) => {

    const handleTranslate = ( goto ) => {
        if ( goto != undefined || goto != null ) {
            navigateTo( goto * 200 );
        }
    }

    return (
        <div className="dF_tC_i_c__child_items">
                <ul>
                    { menu.map( ( { item , goto } , index ) => 
                        <li onClick={ ( ) => handleTranslate( goto ) } key={ index }> { item } </li>
                    )}
                </ul>
        </div>
    )
}


const TranslatedContainer = ( { layers = [ ] } ) => {

    const translateRef = useRef( null );

    const handleTranslate = async ( px ) => {
        translateRef.current.style.transform = `translateX(-${ px }px)`;
    }

    return (
    <>
        <div className="reactFrameit_translatedContainer">
                <div className="rF_tC__inner" ref={ translateRef }>   
                    { layers.map( ( menu , index ) => 
                            <ItemNav key={ index } navigateBack={ handleTranslate } index={ { 
                                back: index > 0 ? index - 1 : 0 , current: index
                            }}>
                                   <RenderMenu menu={ menu } parentRef={ translateRef }  navigateTo={ handleTranslate } />
                            </ItemNav>
                    )}
                </div>
        </div>
     </>
    )
}

export default TranslatedContainer;