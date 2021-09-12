import React , { useState } from 'react';

import ItemsDotDropdown from '../app/index';


const Method = ( itemBack ) => {
    console.log( itemBack );
}

const dropdown_required = {
    method: Method , 
    items:
    [
      { element: 'contact' , 
        value: 50 
      } , 
      { element: 'about'   ,
        value: 100 
      } , 
      {
        element: 'showcase' ,
        value: 200
      } ,
      { element: 'contact 2' , 
        value: 50 
      } , 
      { element: 'about 2'   ,
        value: 100 
      } , 
      {
       element: 'showcase 2' ,
       value: 200
      }
    ]
}

export default {
    title: 'Dropdowns/ItemsdotDropdown',
    component: ItemsDotDropdown , 
    argTypes: {
        theme: {
            options: ['light' , 'dark' ] , 
            control: { type: 'radio' } 
        } , 
        flow: {
            options: ['left' , 'right' ] , 
            control: { type: 'radio' }
        } , 
        type: {
            options: ['fix' , 'off-canvas'] , 
            control: { type: 'radio' }
        }
    }
};

const Template = (args) => <ItemsDotDropdown {...args} />;

export const Component = Template.bind({ });

Component.parameters = { }

Component.args = { 
    theme: 'dark' , id: 'dropdown_unique' , classNames: 'class1 class2' , dropdown_required: dropdown_required
}