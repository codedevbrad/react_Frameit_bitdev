
import React from 'react';
import HeadingP2 from '../app/index';

export default {
    title: 'Prebuild/heading2',
    component:  HeadingP2 , 
    argTypes: {
        arg: {
            description: '' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: ['1' , '2' ] , 
            control: { type: 'radio' } 
        }
    }
};

const Template = (args) => < HeadingP2 {...args} />;
export const Component = Template.bind({ });

Component.parameters = {
}

Component.args = { };