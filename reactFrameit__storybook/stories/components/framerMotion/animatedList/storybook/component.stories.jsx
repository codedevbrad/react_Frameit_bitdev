import React , { useEffect } from 'react';
import MotionAnimatedList from '../app/index';

const items = [
    { element: <div> hello dude 1 </div> } , 
    { element: <div> hello dude 2 </div> }
]

export default {
    title: 'FramerMotion/animatedList',
    component: MotionAnimatedList , 
    argTypes: {
        items: { control: {
            disable: true 
        }}
    }
};

const Template = (args) => <MotionAnimatedList {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = {
    items: items  , containerClass: 'class'
};
