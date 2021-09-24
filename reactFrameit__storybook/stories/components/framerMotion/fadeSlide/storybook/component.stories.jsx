import React , { useEffect } from 'react';
import MotionSlideFade from '../app/index';

function MotionSlideFadeStorybook() {

    return (  
        <div>
            hello dude
        </div>
    );
}

export default {
    title: 'FramerMotion/slidefade',
    component: MotionSlideFade , 
    argTypes: {
        flow: { control: {
            disable: true 
        }} , 
        children: { control: {
            disable: true 
        }} , 
        delay: { control: {
            disable: true 
        }}
     }
};

const Template = (args) => <MotionSlideFade {...args} />;

export const SlideUp = Template.bind({ });

SlideUp.parameters = {
    layout: 'centered'
}

SlideUp.args = {
    flow: 'up' , children: <MotionSlideFadeStorybook />
};

export const SlideDown = Template.bind({ });

SlideDown.parameters = {
    layout: 'centered'
}

SlideDown.args = {
    flow: 'down' , children: <MotionSlideFadeStorybook />
};