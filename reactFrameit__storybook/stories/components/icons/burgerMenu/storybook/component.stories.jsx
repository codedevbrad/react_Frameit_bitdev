import React from 'react';
import MenuBurger from '../app/index';

export default {
    title: 'Icon/MenuBurger',
    component: MenuBurger , 
    argTypes: {
        type: {
            description: 'switch between different menuBurgers' ,
            table: {
                type: { summary: 'type: number' },
            },
            options: [ 1 , 2 ] , 
            control: { type: 'radio' } 
        } , 
        state: { 
            description: 'pass an outside state to control the behaviour of the menu' ,
            table: {
              type: { summary: 'type: boolean' }
            },
            options: [ true , false ] ,
            control: { type: 'radio' }
        },
        sizing: { 
            description: 'set the sizing of the burgermenu' ,
            table: {
                type: { summary: 'type: string' }
            },
            options: [ 's' , 's-m' , 'm' , 'm-l' , 'l', 49 ],
            control: { type: 'radio' }
        },
        themeMode: { 
            description: 'choose the color mode for the hamburger' ,
            table: {
                 type: { summary: 'type: string' }
            },
            options: ['light', 'dark' ],
            control: { type: 'radio' }
        }
    }
};


const Template = (args) => <MenuBurger {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}
