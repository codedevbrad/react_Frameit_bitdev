import React from 'react';
import DropdownLarge from '../app/index';

const Menu1 = ( ) => {
    return (
        <div>
             <ul>
                 <li> item 1 </li>
                 <li> item 2 </li>
                 <li> item 3 </li>
                 <li> item 4 </li>
                 <li> item 5 </li>
             </ul>
        </div>
    )
}

const DropdownLargeShowcase = ( { ...props } ) => {

    let items = [ 
        { item: 'furniture'   , subMenu: <Menu1 /> } ,
        { item: 'decorations' , subMenu: false  , link: '/decorations' } , 
        { item: 'home office' , subMenu: <Menu1 />  }
    ]

    return (
        <DropdownLarge menuItems={ items } top={ 35 } />
    )
}


export default {
    title: 'Dropdowns/dropdownLarge',
    component: DropdownLargeShowcase , 
    argTypes: {
        arg: {
            description: '' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: ['1' , '2' ] , 
            control: { type: 'radio' } 
        }
    }
};

const Template = (args) => <DropdownLargeShowcase {...args} />;
export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = { };