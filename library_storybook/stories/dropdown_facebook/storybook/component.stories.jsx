import React , { useState } from 'react';

import Bell from '../app/icons/bell.js';
import Cog  from '../app/icons/cog.js';
import Bolt from '../app/icons/bolt.js';

import FacebookMenu from '../app/components/dropdown/index';


let toplevel = [
      { icon: <Cog  />  , name: 'my profile' } ,
      { icon: <Bell />  , name: 'messages' , goto: 'menu-code'    } , 
      { icon: <Bolt />  , name: 'animals'  , goto: 'menu-animals' }
];

let menus = [
    {
      title: 'menu-code' ,
      items: [
          { icon: false , name: 'new' } , 
          { icon: false , name: 'inbox' }
      ]
    } , 
    {
      title: 'menu-animals' ,
      items: [
          { icon: '🦘' , name: 'python' } , 
          { icon: '🐸' , name: 'kangagroo' } , 
          { icon: '🦋' , name: 'otter' }
      ]
    }
];

function FacebookMenuShowcase ( { ...props } ) {
    return (
        <FacebookMenu icon={ <Cog /> } toplevel={ toplevel } submenus={ menus } { ...props } />
    );
}

export default {
    title: 'Tooltip/DropdownFacebook',
    component: FacebookMenuShowcase , 
    argTypes: {
        theme: {
            options: ['light' , 'dark' ] , 
            control: { type: 'radio' } 
        }
    }
};

const Template = (args) => <FacebookMenuShowcase {...args} />;

export const Basic = Template.bind({ 

});

Basic.args = { }