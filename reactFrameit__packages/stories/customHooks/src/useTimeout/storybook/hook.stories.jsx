import React from 'react';

import OneSecondTimer from './index';
  
export default {
    title: 'Hooks/useTimeout' ,
    component: OneSecondTimer ,
    argTypes: { }
};

const Template = (args) => <OneSecondTimer {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    delay: 3000 
};
