import React from 'react';

import ButtonHover from '../app/index';

export default {
    title: 'Buttons/buttonHover',
    component: ButtonHover , 
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

const Template = (args) => <ButtonHover {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = { 
    value: 'click me'
};
