import React from 'react';
import MenuBurger from '../app/index';

export default {
    title: 'Icon/MenuBurger',
    component:  MenuBurger , 
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
        }
    }
};

const Template = (args) => <MenuBurger {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}
