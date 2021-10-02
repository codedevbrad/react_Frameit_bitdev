import React, { useState, useEffect } from 'react';

import MotionMenuItems from '../app/index';

export default {
    title: 'FramerMotion/menuItems',
    component:  MotionMenuItems , 
    argTypes: {
        state: {
            description: '' ,
            table: {
                type: { summary: 'type: string' },
            },
            control: { type: 'boolean' } 
        }
    }
};

const Template = (args) => <MotionMenuItems {...args} />;
export const Component = Template.bind({ });

Component.parameters = {

}

Component.args = { 
    state: false
};