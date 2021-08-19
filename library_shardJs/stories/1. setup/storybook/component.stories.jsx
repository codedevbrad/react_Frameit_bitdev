import React , { useState } from 'react';

import App from '../app/index';

export default {
    title: 'uukit/setup',
    component: App 
};

const Template = (args) => <App {...args} />;

export const Basic = Template.bind({ });

Basic.parameters = { layout: 'centered' }

Basic.args = { };