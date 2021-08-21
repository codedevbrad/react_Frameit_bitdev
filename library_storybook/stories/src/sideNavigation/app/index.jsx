import React, { useState } from 'react';
import './style.scss';

const Sidenav = ( { children , width = 300 , classNames , id , flow , type , ...props } ) => {

        const [ navOpen , setNav ] = useState( false  );

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
                        <h2>Sidenav Push Example</h2>
                        <p>Click on the element below to open the side navigation menu, and push this content to the right. Notice that we add a black see-through background-color to body when the sidenav is opened.</p>
                        <div className="dropdown_titleArea" onClick={ e => handleNav( navOpen ) } >
                            <h1> open </h1>
                        </div>
                    </div>
                </div>
        )
}

export default Sidenav;