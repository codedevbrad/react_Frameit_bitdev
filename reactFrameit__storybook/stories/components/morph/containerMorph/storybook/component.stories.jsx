import React from 'react';
import MorphedContainer from '../app/index';

const Container = ( ) => {
    return (
        <div>
            <h1> hey there </h1>
            <p> wassap dude hows it getBoundingClientRect </p>
        </div>
    )
}

export default {
    title: 'Morph/container',
    component: MorphedContainer , 
    argTypes: {
        theme: {
            description: 'control the color theme of the dropdown.' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: ['light' , 'dark' ] , 
            control: { type: 'radio' } 
        } , 
        type: {
            options: [ 0 , 1 ] , 
            control: { type: 'radio' } 
        } , 
        children: {
            control: { disable: true }
        }
    }
};

const Template = (args) => <MorphedContainer {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = { 
    children: <Container /> , type: 0
};
