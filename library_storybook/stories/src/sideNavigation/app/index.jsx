import React, { useState } from 'react';
import './style.scss';

const Sidenav = ( { toggleOpen , children , width = 300 , classNames , id , flow , type , ...props } ) => {

        const [ navOpen , setNav ] = useState( toggleOpen  );

        const handleNav = ( state ) => {
            setNav( !navOpen );
        }

        return (
                <div className={`reactFrameit_pushnav ${ classNames } flow-${ flow } type-${ type }`} { ...props }>
                    <div id="mySidenav" className="sidenav" style={ { width: navOpen ? `${width}px` : '0px' } }>
                        <div className="closebtn" onClick={ ( ) => setNav( false )}> &times; </div>

                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>

                    <div id="main">
                       
                        <div className="dropdown_titleArea" onClick={ e => handleNav( navOpen ) } >
                            <h1> open </h1>
                        </div> 
                        { children }
                    </div>
                </div>
        )
}

export default Sidenav;