import React, { useState, useEffect } from 'react';

import MotionSideBar from '../app/index';

export default {
    title: 'FramerMotion/sidebar',
    component:  MotionSideBar , 
    argTypes: {
        side: {
            description: '' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: ['left', 'right' ] , 
            control: { type: 'radio' } 
        }
    }
};

const Template = (args) => <MotionSideBar {...args} />;
export const Component = Template.bind({ });

Component.parameters = {

}

Component.args = { 
    side: 'left'
};