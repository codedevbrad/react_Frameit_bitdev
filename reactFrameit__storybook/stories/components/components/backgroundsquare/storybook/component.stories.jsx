import React , { useState } from 'react';

import DivBackground from '../app/index';

const StorybookExample = ({ ...args } ) => {
    return (
        <DivBackground style={{
            'color': 'black' 
        }} { ...args }>
                hey there cool guy.
        </DivBackground>
    )
}

export default {
    title: 'Components/divbackground',
    component: StorybookExample , 
    argTypes: {
        pos: {
            options: ['left' , 'right'],
            control: { type: 'radio' }
        }
    }
};


const Template = (args) => <StorybookExample {...args} />;

export const Component = Template.bind({ });

Component.parameters = { }

Component.args = {  };
