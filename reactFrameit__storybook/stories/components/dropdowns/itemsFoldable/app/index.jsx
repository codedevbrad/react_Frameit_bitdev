import React, { useEffect, useRef, useState } from 'react';
import Dropdown from '../../dropdown/app/dropdown';

import './style.scss';

const useEvent = ( element = window , type , func ) => {
        useEffect(  ( ) => {
                element.addEventListener( type , func );

                ( ) => {
                   element.removeEventListener( type , func );
                }
        } , [ ] );
}

const useResizeDelay = ( ) => {
        window.onresize = function(event) {
                delay(function(){
                  console.log('Window Resize...');
                  delayedFunctions();
                }, 500);
        };
}

const Item = ( { element , method , itemRef } ) => { 
        
        const elementRef = useRef( null );
        const { isLast , last } = itemRef;

        useEffect( ( ) => {
        
                if ( isLast ) {
                   last();
                }
                
        } , [ ] );

        return ( 
            <li onClick={ ( ) => method( value ) } ref={ elementRef }> { element } </li>
        )
}


const ItemsDotDropdown = ( { dropdown_required } ) => {

        const { method , items } = dropdown_required;

        const refPlaced = useRef( null );

        let [ itemsShow , setItemsShow ] = useState( [ ] );
        
        let [ itemsHidden , setHiddenItems ] = useState( [ ] );

        function createLists ( ) {

                let elements = [...document.querySelectorAll('#unique ul li') ]
                elements.shift();

                let elementsPut = [ ];
                
                elements.map( ( element , index ) => {
                        if ( element.offsetTop != refPlaced.current.offsetTop ) {
                            // element.style.background = 'red';
                            elementsPut.push( itemsShow[ index ] );
                        } 
                });

                let breakPoint = ( itemsShow.length - elementsPut.length );

                let itemsKeep = [...itemsShow];
                itemsKeep.length = breakPoint;

                // console.log( itemsShow , breakPoint , itemsKeep );

                setHiddenItems( elementsPut );
                setItemsShow( itemsKeep );
        }

        useEffect( ( ) => {
                setItemsShow( items );
        } , [ ] );

        return (
            <div id={'unique'} className="reactFrameit_itemsDot">

                    <ul>
                        <li ref={ refPlaced } className='dummy'> . </li> 

                        { itemsShow.map( ( item , index ) =>
                                <Item element={ item.element } method={ method } key={ index } itemRef={ { 
                                        isLast: index == itemsShow.length - 1  , last: createLists } 
                                }/>
                        )}

                    </ul>
                    
                    <Dropdown dropdownText={ '. . .' } direction='right' theme='dark' flow='vert'
                              customId='dropdown_unique_foldee' customClasses='dropdown__5'>

                                      <ul>
                                              { itemsHidden.map( ( { element , value } ) =>
                                                  <li> { element } </li>
                                              )}
                                      </ul>
                    </Dropdown>
            </div>
        )
}

export default ItemsDotDropdown;