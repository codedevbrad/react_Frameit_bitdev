import React , { useState } from 'react';
import FlexItem from '../flexItem/index';

export default {
    title: 'Flexbox/flexitem',
    component: FlexItem , 
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



const Template = (args) => <FlexItem { ...args } />;

export const Basic = Template.bind({ });

Basic.parameters = {
    layout: 'centered'
}

Basic.args = {

}