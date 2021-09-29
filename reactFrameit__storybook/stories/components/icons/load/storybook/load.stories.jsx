import React from 'react';

import IconLoader from '../app/index';

export default {
    title: 'Icon/load',
    component: IconLoader , 
    argTypes: {
        customLoadingClass: {
            control: { type: 'text' } 
        } 
    }
};

const Template = (args) => <IconLoader {...args} />;

export const view = Template.bind({});

view.args = { 
    customLoadingClass: 'custom_load'
}