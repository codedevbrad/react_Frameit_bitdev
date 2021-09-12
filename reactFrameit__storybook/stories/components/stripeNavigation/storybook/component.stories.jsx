import React from 'react';

import StripeNavigation from '../app/index.jsx';

export default {
    title: 'Navigation/stripenav',
    component: StripeNavigation , 
    argTypes: { }
};

const Template = (args) => <StripeNavigation {...args} />;

export const Component = Template.bind({ });

Component.parameters = { }


Component.args = { };
