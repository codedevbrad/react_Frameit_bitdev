import React from 'react';

import Message from '../app/index';

export default {
    title: 'Components/Message',
    component: Message , 
    argTypes: {
        horzPos: {
            description: 'control the color theme of the dropdown.' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: [ 'left' , 'right' , 'middle' ] , 
            control: { type: 'radio' } 
        } ,
        vertPos: {
            description: 'control the color theme of the dropdown.' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: [ 'top' , 'bottom' ] , 
            control: { type: 'radio' } 
        } 
    }
};

const Template = (args) => <Message {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = {
    msgTitle: 'saved to database' , msgBody: 'congrats dude' , horzPos: 'left' , vertPos: 'top' ,
    stateChange: true
};
