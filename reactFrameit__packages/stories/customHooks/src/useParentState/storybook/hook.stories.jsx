import React from 'react';

import UseHook from './index';

export default {
    title: 'Hooks/useParentState' ,
    component: UseHook ,
    argTypes: { }
};

const Template = (args) => <UseHook {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    name: 'harry'
};
