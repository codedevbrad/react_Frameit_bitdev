
import React from 'react';
import IconPallete from '../app/index';

export default {
title: 'Example/storybook',
component:  IconPallete , 
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

const Template = (args) => < IconPallete {...args} />;
export const Component = Template.bind({ });

Component.parameters = { layout: 'centered' }
Component.args = { };