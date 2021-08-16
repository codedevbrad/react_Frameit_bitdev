import React , { useEffect , useState , useRef } from 'react';
import './class_styles.scss';

const Navbar__each_element = ( { element , index , callback } ) => {

    const toggleNav = ( ) => callback( element );

    return (
        <li onClick={ () => toggleNav() } className="navbar__element_link">
            <div>
               <i className={ element.icon }> </i>
            </div>
            <h3>  { element.title } </h3>
        </li>
    )
}

const Navbar = ( { styleOverride , direction , data , color , isFixed , subLinkCall , customX } ) => {

      // determined if you're passing elements as children or a data array.
      const nav__elements = data;

      const [ chosen__data , setChosen__data ] = useState( null );

      const toggleNav__state = ( data_index ) => {
          console.log( 'clicked' , data_index );
          setChosen__data( data_index );
      }

      const close__nav = ( ) => setChosen__data( null );

      return (
          <div className={ `navbar__outer navbar__outer-${ direction ? direction : 'default'}` } id={ styleOverride }
               style={ { background: color[0] , display: isFixed ? 'fixed' : 'flex' } }>

                <ul className="navbar__elements">
                      { nav__elements.map( ( element , index ) =>
                          <Navbar__each_element key={ index } element={ element } index={ index } callback={ toggleNav__state }/>
                      ) }
                </ul>
                <div className="navbar__inner" style={ { background: color[1] , visibility: chosen__data != null ? 'visible' : 'hidden' } }>
                      { chosen__data != null &&
                          <div>
                              <div>
                                    <h1> { chosen__data.title } </h1>
                                    <div className="nabar__close_btn" onClick={ ( ) => close__nav() }>
                                        { customX ? customX : <i class="fas fa-times"></i> }
                                    </div>
                              </div>
                              <ul>
                                  { chosen__data.subLinks.map( ( subElement , index  ) =>
                                      <li onClick={  ( e ) => subLinkCall( subElement ) }> { subElement.subTitle } </li>
                                  ) }
                              </ul>
                          </div>
                      }
                </div>
          </div>
      )
}

export default Navbar;
