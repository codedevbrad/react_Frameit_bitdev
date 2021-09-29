import React from 'react';
import './style.scss';

import IconPallete   from '../../../icons/iconPallete/app/index';
import IconLiked     from '../../../icons/liked/app/index';
import IconShopcart  from '../../../icons/shopCart/app/index';

import DropdownLarge from '../../../dropdowns/dropdownLarge/app/index';
import Dropdown      from '../../../dropdowns/dropdown/app/dropdown';


const HeadingP1 = ( { title = 'template' , style = 'a' , menuItems , headingDropdown  } ) => {
    return (
        <div className={`reactFrameit_heading_p_1 rF_heading_p_1_style__${ style }`}>
                <div className="rF_h_p_1__banner"> 
                        <h3> welcome greeting </h3>
                </div>
                <header className="rF_h_p_1__heading">
                        <div className="rF_h_p_1_heading__center">
                                <div className="rF_h_p_1_heading__upper_items">

                                        <div className="rF_h_p_1_heading__links">
                                                <Dropdown dropdownText={ 'translate' } 
                                                                 theme={ 'dark' } 
                                                                  flow={ 'vert' }  
                                                      dropdownRequired={ headingDropdown } 
                                                      direction={ 'center'}
                                                />
                                        </div>

                                        <div className="rF_h_p_1_heading__title">
                                            <h1> { title } </h1>
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
                                        <DropdownLarge menuItems={ menuItems } top={ 60 } />
                                </nav>
                        </div>
                </header>
        </div>
    )
}

export default HeadingP1;