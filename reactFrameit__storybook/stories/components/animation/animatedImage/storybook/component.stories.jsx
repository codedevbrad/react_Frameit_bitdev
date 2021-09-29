import React from 'react';
import AnimatedImage from '../app/index';

export default {
title:     'Animation/animatedImage',
component: AnimatedImage , 
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


const Template = (args) => <AnimatedImage {...args} />;
export const Component = Template.bind({ });


Component.parameters = {
    layout: 'centered'
}

Component.args = { 
    src: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
};