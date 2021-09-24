import React from 'react';

import Tooltip from '../app/index';

export default {
    title: 'Components/Tooltip',
    component: Tooltip , 
    argTypes: { 
        position:{
            control: 'radio' , options: [ 'left' , 'right' , 'top' , 'bottom' ]
        }
    }
};

const Template = (args) => <Tooltip {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = {
    children: <p> hey there something happens. </p> , tip: 'something happens' , className: 'coolmang'
};
