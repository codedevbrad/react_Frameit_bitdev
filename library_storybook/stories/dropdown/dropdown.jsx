import React , { useState , useRef , useEffect } from 'react';
import './dropdown.css';

function overlapPixels ( vert_dir , rect ) {
    let { width , height } = rect;

    let obj = vert_dir == 'top' ? { bottom: `${height + 10}px` } : { top: `${height + 10}px` }

    return obj;
}

const Dropdown = ( { 
    dropdownRequired , dropdownText ,  
    theme = 'light' , flow = 'vert' , direction = 'right' , verticalPosition = false ,
    customId , customClasses

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

        if ( verticalPosition != false ) {
          
            let css = overlapPixels( verticalPosition , pixels );
            setPixel( css );
        }

    } , [ verticalPosition ] );

    return (
      <div className={`dropdown ${ customClasses }`} id={ customId } >

            <div ref={ titleRef } className="dropdown_titleArea" onClick={ e => toggleDropdown(e) } ref={ titleRef }>
                <h1> { dropdownText } </h1>
            </div>

            { isToggle &&
              <div className={ `dropdown-content dropdown__${ direction } 
                                ${ theme === 'dark' ? 'dropdown__dark' : 'dropdown__light' }
                                ${  flow === 'horz' ? 'dropdown__horz' : 'dropdown__vert' }
                                ${ verticalPosition ? `dropdown_vertical_${ verticalPosition }` : '' }
                               
              `} style={ pixel }>

                    <ul className="dropdown_item_container">

                          { items.map( ( { element , value } , index ) => 
                              <li onClick={ ( ) => handleDropdown( value ) } key={ index }> { element } </li>
                          )}

                    </ul>
              </div>
            }
      </div>
    )
}

export default Dropdown;