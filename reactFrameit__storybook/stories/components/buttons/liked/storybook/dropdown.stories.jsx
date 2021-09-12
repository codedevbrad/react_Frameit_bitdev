import React from 'react';

import IconLiked from '../app/index';

const clickMethod = ( callback ) => {
    console.log( callback );
}

export default {
    title: 'Icon/liked',
    component: IconLiked , 
    argTypes: { }
};

const Template = (args) => <IconLiked {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = { 
    clicked: clickMethod
};
