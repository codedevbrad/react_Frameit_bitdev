import React from 'react';
import HeadingP1 from '../app/index';

export default {
    title: 'prebuild/heading1',
    component:  HeadingP1 , 
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


const Template = (args) => < HeadingP1 {...args} />;

export const Component = Template.bind({ });

Component.parameters = {}

Component.args = { };