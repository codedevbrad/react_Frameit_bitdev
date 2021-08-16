import React , { useState } from 'react';
import FlexBoxes from './index';
import FlexItem from '../flexItem/index';

export default {
    title: 'Flexbox/boxes',
    component: FlexBoxes , 
    argTypes: {
        layout: {
            options: [ 1 , 2 , 3  ] , 
            control: { type: 'radio' } 
        } , 
        stretch: {
            options:  [ false , true ] , 
            control: { type: 'radio' }
        }
    }
};

const FlexBoxesShowcase = ( { ...props } ) => {
    return (
        <FlexBoxes {...props}>
                <FlexItem classname={'item'}> child one </FlexItem>
                <FlexItem > child two </FlexItem>
                <FlexItem > child three </FlexItem>
                <FlexItem > child four </FlexItem>
                <FlexItem > child five </FlexItem>
        </FlexBoxes>
    )
}

const Template = (args) => <FlexBoxesShowcase { ...args } />;

export const Basic = Template.bind({ });

Basic.parameters = {
    layout: 'centered'
}

Basic.args = {
    layout: 2 , stretch: true
}