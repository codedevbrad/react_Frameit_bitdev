import React from 'react';

import AuthGoogleLogin from '../app';

export default {
    title: 'Modals/Googlelogin',
    component: AuthGoogleLogin , 
    argTypes: {
        theme: {
            description: 'control the color theme of the dropdown.' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: ['light' , 'dark' ] , 
            control: { type: 'radio' } 
        } 
    }
};

const Template = (args) => <AuthGoogleLogin {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = { 
    googleAPIKey: '959924008088-b31adv1rq8dvgvsnok1eafm7sr2k7ast.apps.googleusercontent.com'
};
