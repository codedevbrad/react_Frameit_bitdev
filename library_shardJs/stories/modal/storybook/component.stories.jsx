import React , { useState } from 'react';

import UiKitModal from '../app/index';

export default {
    title: 'uukit/header',
    component: UiKitModal , 
    argTypes: {
        theme: {
            options: ['light' , 'dark' ] , 
            control: { type: 'radio' } 
        } 
        // flow: {
        //     options: ['horz' , 'vert' ] , 
        //     control: { type: 'radio' }
        // } ,
        // verticalPosition: {
        //     options: [ 'top' , 'bottom' , false ] , 
        //     control: { type: 'radio' }
        // } ,
        // direction: {
        //     options: ['left' , 'right' , 'center' ] , 
        //     control: { type: 'radio' } 
        // } ,
        // dropdownRequired: {
        //     control: { disable: true }
        // }
    }
};

const Template = (args) => <UiKitModal {...args} />;

export const Basic = Template.bind({ });

Basic.parameters = { layout: 'centered' }

Basic.args = { };
