import React from 'react';
import TranslatedContainer from '../app/index';

export default {
    title: 'Components/translated',
    component: TranslatedContainer , 
    argTypes: {}
};

const fake = [
   { 
        name: 'menu1' , 
        items: [ 
            { item: 'settings' , goto: 'menu2' } , 
            { item: 'notifications' } , 
            { item: 'system' }
        ] 
    }, 
    {
        name: 'menu2' , 
        items: [ 
            { item: 'profile' , goto: 2 } , 
            { item: 'thememode' } , 
            { item: 'shortcuts' }
        ]
    }
]

const array = [ 
    [ 
        { item: 'settings' , goto: 1 } , 
        { item: 'notifications' } , 
        { item: 'system' }
    ] , 
    [ 
        { item: 'profile' , goto: 2 } , 
        { item: 'thememode' } , 
        { item: 'shortcuts' }
    ] , 
    [ 
        { item: 'name'  } , 
        { item: 'update' } , 
        { item: 'logout' }
    ]
]


const Template = (args) => <TranslatedContainer {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = { layers: array };
