import React , { useState } from 'react';

import DropdownOverlap from '../app/dropdown';

const Method = ( itemBack ) => {
    console.log( itemBack );
}

const dropdown_required = {
    method: Method , 
    items:
    [
      { element: 'center' , 
        value: 50 
      } , 
      { element: 'full'   ,
        value: 100 
      } , 
      {
        element: 'full-page' ,
        value: 200
      }
    ]
}

export default {
    title: 'Dropdowns/DropdownOverlap',
    component: DropdownOverlap , 
    argTypes: {
        theme: {
            options: ['light' , 'dark' ] , 
            control: { type: 'radio' } 
        } , 
        overlap: {
            options: [ 'left' , 'right'  ] , 
            control: { type: 'radio' }
        } ,
        dropdownRequired: {
            control: { disable: true }
        }
    }
};

const Template = (args) => <DropdownOverlap {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = {
    dropdownText: 'click dropdown' , dropdownRequired: dropdown_required , 
    direction: 'left' , theme: 'dark' ,  overlap: 'right' ,
    customId: 'dropdown_unique' , customClasses: 'dropdown__1' ,
};