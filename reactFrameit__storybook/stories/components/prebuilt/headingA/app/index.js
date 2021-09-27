import React from 'react';
import './style.scss';

import IconPallete from '../../../icons/iconPallete/app/index';
import IconLiked   from '../../../icons/liked/app/index';
import IconShopcart from '../../../icons/shopCart/app/index';


const HeadingP1 = ( { style = 'a' } ) => {
    return (
        <div className={`reactFrameit_heading_p_1 rF_heading_p_1_style__${ style }`}>
                <div className="rF_h_p_1__banner"> 
                        <h3> shop title </h3>
                </div>
                <header className="rF_h_p_1__heading">
                        <div className="rF_h_p_1_heading__center">
                                <div className="rF_h_p_1_heading__upper_items">

                                        <div className="rF_h_p_1_heading__links">
                                                translate
                                        </div>

                                        <div className="rF_h_p_1_heading__title">
                                            <h1> frisson </h1>
                                        </div>
                                        <div className="rF_h_p_1_heading__icons">
                                                <IconPallete>
                                                     <IconLiked />
                                                     <IconShopcart addedTo={ 3 } />
                                                     <span class="material-icons-outlined"> face </span>
                                                </IconPallete>
                                        </div>
                                </div>

                                <nav className="rF_h_p_1_heading__lower_items">
                                        <ul>
                                            <li> furniture   </li>
                                            <li> decorations </li>
                                            <li> home office </li>
                                        </ul>
                                </nav>
                        </div>
                </header>
        </div>
    )
}

export default HeadingP1;