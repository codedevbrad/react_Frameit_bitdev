import React, { useEffect, useState } from 'react';
import './style.scss';

const Sidenav = ( 
    { theme , handle , elements = [] , children , width = 300 , classNames , id , flow , type , ...props } 
) => {

        let [ state , toggle ] = handle;

        return (
                <div className={`reactFrameit_pushnav ${ classNames } flow-${ flow } type-${ type }`} { ...props }>
                    <div id="mySidenav" className="sidenav" style={ { width: state ? `${width}px` : '0px' } }>
                        <div className="closebtn" onClick={ ( ) => toggle( false )}> &times; </div>

                            <ul>
                               { elements.map( ( element ) => 
                                    <li> 
                                        <a href={ element.link }> { element.title } </a>
                                    </li>
                               )}
                            </ul>
                    </div>

                    <div id="main">
                       
                        { children }
                    </div>
                </div>
        )
}

export default Sidenav;