import React , { useState } from 'react';

import Dropdown from './dropdown';

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
    title: 'Tooltip/Dropdown',
    component: Dropdown , 
    argTypes: {
        theme: {
            options: ['light' , 'dark' ] , 
            control: { type: 'radio' } 
        } , 
        flow: {
            options: ['horz' , 'vert' ] , 
            control: { type: 'radio' }
        } ,
        verticalPosition: {
            options: [ 'top' , 'bottom' , false ] , 
            control: { type: 'radio' }
        } ,
        direction: {
            options: ['left' , 'right' , 'center' ] , 
            control: { type: 'radio' } 
        } ,
        dropdownRequired: {
            control: { disable: true }
        }
    }
};

const Template = (args) => <Dropdown {...args} />;

export const Basic = Template.bind({ });

Basic.parameters = {
    layout: 'centered'
}

Basic.args = {
    dropdownText: 'click dropdown' , dropdownRequired: dropdown_required , 
    direction: 'left' , theme: 'dark' , flow: 'horz' ,
    customId: 'dropdown_unique' , customClasses: 'dropdown__1' 
};
