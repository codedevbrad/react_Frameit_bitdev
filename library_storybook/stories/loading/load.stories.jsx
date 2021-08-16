import React , { useState } from 'react';

import Loader from './load';

export default {
    title: 'Loading',
    component: Loader , 
    argTypes: {
        customLoadingClass: {
            control: { type: 'text' } 
        } 
    }
};

const Template = (args) => <Loader {...args} />;

export const view = Template.bind({});

view.args = { 
    customLoadingClass: 'custom_load'
}