import { useState } from "react";

import TimeoutComponent from './index';

export default {
    title: 'Hooks/useInputTmeout' ,
    component: TimeoutComponent ,
    argTypes: { }
};

const Template = (args) => <TimeoutComponent {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    name: 'harry' , wait: 10000
};
