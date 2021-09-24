import React , { useState } from 'react';

import Loader from '../app/load';

export default {
    title: 'Loading/loader',
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