import React from 'react';
import MotionWidth from '../app/index';

export default {
    title: 'FramerMotion/width',
    component:  MotionWidth , 
    argTypes: {
    arg: {
        description: '' ,
        table: {
            type: { summary: 'type: string' },
        },
        options: ['1' , '2' ] , 
        control: { type: 'radio' } 
        }
    }
};


const MotionWidthShowcase = ( ) => {
    return (
        <div>
            hey dude
        </div>
    )
}

const Template = (args) => < MotionWidth {...args} />;
export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = {
    children: <MotionWidthShowcase />
};