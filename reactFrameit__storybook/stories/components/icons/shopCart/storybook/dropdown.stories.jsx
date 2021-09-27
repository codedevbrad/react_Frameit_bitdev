import React from 'react';

import IconShopCart from '../app/index';

const clickMethod = ( callback ) => {
    console.log( callback );
}

export default {
    title: 'Icon/shopcart',
    component: IconShopCart , 
    argTypes: { 
        addedTo: { 
            description: 'how full is the bag?' ,
            table: {
                 type: { summary: 'type: number' }
            },
            control: { type: 'number' }
        }
    }
};

const Template = (args) => <IconShopCart {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = { 
    clicked: clickMethod , addedTo: 2
};
