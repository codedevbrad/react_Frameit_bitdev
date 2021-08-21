import React from 'react';

import Dropdown from '../app/dropdown';

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
    title: 'Dropdowns/Dropdown',
    component: Dropdown , 
    argTypes: {
        theme: {
            description: 'control the color theme of the dropdown.' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: ['light' , 'dark' ] , 
            control: { type: 'radio' } 
        } , 
        flow: {
            description: 'control the flow of dropdown items.' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: ['horz' , 'vert' ] , 
            control: { type: 'radio' }
        } ,
        verticalPosition: {
            description: 'control the vertical position of the dropdown' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: [ 'top' , 'bottom' , false ] , 
            control: { type: 'radio' }
        } ,
        direction: {
            description: 'control the horizontal position of the dropdown' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: ['left' , 'right' , 'center' ] , 
            control: { type: 'radio' } 
        } ,
        dropdownRequired: {
            description: 'passes an object containing the method to handle items being clicked and the items to be passed' ,
            table: {
                type: { summary: 'type: obj' },
            },
            control: { disable: true } 
        } , 
        dropdownText: {
            description: 'The text displayed to toggle a dropdown' ,
            table: {
                type: { summary: 'type: string' },
            },
        } ,
        customId: {
            description: 'give your dropdown a unique id' ,
            table: {
                type: { summary: 'type: string' },
            },
        } , 
        customClasses: {
            description: 'give your dropdown classnames' ,
            table: {
                type: { summary: 'type: string' },
            },
        }
    }
};

const Template = (args) => <Dropdown {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = {
    dropdownText: 'click dropdown' , dropdownRequired: dropdown_required , 
    direction: 'left' , theme: 'dark' , flow: 'horz' ,
    customId: 'dropdown_unique' , customClasses: 'dropdown__1' 
};
