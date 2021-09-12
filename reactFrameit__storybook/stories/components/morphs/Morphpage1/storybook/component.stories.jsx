import React from 'react';
import MorphFullPage from '../app/index';

export default {
    title: 'Morph/fullpage',
    component: MorphFullPage , 
    argTypes: {
        theme: {
            description: 'control the color theme of the dropdown.' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: ['light' , 'dark' ] , 
            control: { type: 'radio' } 
        } 
    }
};

const Template = (args) => <MorphFullPage {...args} />;

export const Component = Template.bind({ });

Component.parameters = { }

Component.args = { };
