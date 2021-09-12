import React from 'react';
import ElementAnimatedWidth from '../app';

function WidthShowcase ( { ...props } ) {
    return (
        <div>
                <ElementAnimatedWidth { ...props }>
                    <h1> hey dude </h1>
                    <p> hows it going </p>
                </ElementAnimatedWidth>
        </div>
    );
}

export default {
    title: 'Animation/width',
    component: WidthShowcase , 
    argTypes: {
        customWidth: {
            control: 'number' 
        } , 
        open: {
            control: 'radio' , 
            options: [ true , false ]
        } , 
        flow: {
            control: 'radio' , 
            options: [ 'left' , 'right' ]
        }
    }
};

const Template = (args) => <WidthShowcase {...args} />;

export const Component = Template.bind({ });

Component.parameters = {}

Component.args = { open: true }