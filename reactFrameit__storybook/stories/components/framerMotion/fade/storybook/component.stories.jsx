import React from 'react';
import MotionFade from '../app/index';


function MotionFadeStorybook() {
    return (  
        <div>
                hello dude
        </div>
    );
}

export default {
    title: 'FramerMotion/fade',
    component: MotionFade , 
    argTypes: { }
};

const Template = (args) => <MotionFade {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = {
    children: <MotionFadeStorybook />
 };