import React , { useState , useRef , useEffect } from 'react';
import './dropdown.css';


const DropdownOverlap = ( { 
    dropdownRequired , dropdownText , overlap = 'right' , theme = 'light' , customId , customClasses
} ) => {

    const titleRef = useRef( null );

    const [ pixel , setPixel ] = useState( { } );

    const [isToggle , setToggle ] = useState(false);

    const toggleDropdown = ( e ) => setToggle( !isToggle );

    const { items , method } = dropdownRequired;

    const handleDropdown = ( value ) => {
        method( value );
    }

    useEffect( ( ) => {
        
        let pixels = titleRef.current.getBoundingClientRect();

        let obj = overlap == 'right' ? { left: `${pixels.width + 10}px` } : { right: `${pixels.width + 10}px` }
        setPixel( obj );

    } , [ overlap ] );

    return (
      <div className={`dropdown_overlap ${ customClasses }`} id={ customId } >

            <div ref={ titleRef } className="dropdown_overlap__titleArea" onClick={ e => toggleDropdown(e) } ref={ titleRef }>
                <h1> { dropdownText } </h1>
            </div>

            { isToggle &&
              <div className={ `dropdown_overlap-content dropdown__vert
                    ${ theme === 'dark' ? 'dropdown__dark' : 'dropdown__light' }          
              `} style={ pixel }>

                    <ul className="dropdown_overlap__item_container">

                          { items.map( ( { element , value } , index ) => 
                              <li onClick={ ( ) => handleDropdown( value ) } key={ index }> { element } </li>
                          )}

                    </ul>
              </div>
            }
      </div>
    )
}

export default DropdownOverlap;