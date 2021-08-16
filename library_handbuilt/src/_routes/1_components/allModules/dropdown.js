
import React , { useContext , useEffect , useState } from 'react';
import { Dropdown } from '../@codedevbrad_react_frameit/index';

const DropdownShowcase = ( ) => {
    return (
        <div className="eachComponent_showcase showcase_dropdown">
              <h3> dropdown components </h3>
              <code>
                {
`
<Dropdown dropdownText={ 'dropdown title' }
             direction={ 'left' }
        style_override={ 'dropdown__1' }>
     <li> first element   </li>
     <li> secrond element </li>
     <li> third element   </li>
</Dropdown>
`
                }
              </code>

              <section>

              <Dropdown dropdownText={ 'dropdown title' }
                           direction={ 'left' }
                      style_override={ 'dropdown__1' }>
                   <li> first element   </li>
                   <li> secrond element </li>
                   <li> third element   </li>
              </Dropdown>

              </section>

        </div>
    )
}

export default DropdownShowcase;
