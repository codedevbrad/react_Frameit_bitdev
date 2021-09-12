import React from 'react';

import Example from '../app/index';

export default {
    title: 'Example/storybook',
    component: Example , 
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

const Template = (args) => <Example {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = { };
