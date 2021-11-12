import { useState } from "react"

import ScrollDelayComponent from "./index";

export default {
    title: 'Hooks/useScrollTmeout' ,
    component: ScrollDelayComponent ,
    argTypes: { }
};

const Template = (args) => <ScrollDelayComponent {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    delay: 1500
};
