
import React from 'react';
import HeadingP2 from '../app/index';

export default {
    title: 'Prebuild/heading2',
    component:  HeadingP2 , 
    argTypes: {
        side: {
            description: '' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: ['left' , 'right' ] , 
            control: { type: 'radio' } 
        }
    }
};

const Template = (args) => < HeadingP2 {...args} />;
export const Component = Template.bind({ });

Component.parameters = {
}

Component.args = { };