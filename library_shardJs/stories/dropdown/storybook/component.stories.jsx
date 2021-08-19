import React , { useState } from 'react';

import TooltipExample from '../app/index';

export default {
    title: 'uukit/tooltip',
    component: TooltipExample , 
    argTypes: {
    }
};

const Template = (args) => <TooltipExample {...args} />;

export const Basic = Template.bind({ });

Basic.parameters = { layout: 'centered' }

Basic.args = { };
