import React from 'react';
import HeadingP1 from '../app/index';


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


const PrebultHeadingAShowcase = ( { ...props } ) => {

    let items = [ 
        { item: 'furniture'   , subMenu: <Menu1 /> } , 
        { item: 'decorations' , subMenu: false     , link: '/decorations'   } , 
        { item: 'home office' , subMenu: <Menu1 /> }
    ]

    const dropdown_required = {
        method: ( itemBack ) => { console.log( itemBack ); } , 
        items: [
            { element: 'english' , 
                value: 50 
            } , 
            { element: 'spanish'   ,
                value: 100 
            } , 
            {
                element: 'french' ,
                value: 200
            } 
        ]
    }

    return (
        <HeadingP1 { ...props } menuItems={ items } headingDropdown={ dropdown_required } />
    )
}


export default {
    title:      'prebuild/heading1',
    component:  PrebultHeadingAShowcase , 
    argTypes: {
        style: {
            description: 'choose the color pallete.' ,
            table: {
               type: { summary: 'type: string' },
            },
            options: [ 'a' , 'b' ] , 
            control: { type: 'radio' } 
        }
    }
};


const Template = (args) => <PrebultHeadingAShowcase {...args} />;

export const Component = Template.bind({ });

Component.parameters = {}

Component.args = { 
    title: 'notion'
};