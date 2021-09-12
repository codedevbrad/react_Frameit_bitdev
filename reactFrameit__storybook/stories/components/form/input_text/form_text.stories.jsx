import React , { useState } from 'react';

import TextFormUpload from './form_text';


const ConsumeTextForm = ( { ...storybookProps } ) => {
    const [ state , setState ] = useState('');
    return (
        <TextFormUpload state={ state } change={ setState } uniqueId={ '12345' } 
            { ...storybookProps }
        />
    )
}

export default {
    title: 'Form/Form_text',
    component: ConsumeTextForm , 
    argTypes: {
        
        state: {
            control: { disable: true }
        } , 
        change: {
            control: { disable: true }
        }
    }
};

const Template = (args) => <ConsumeTextForm {...args} />;

export const view = Template.bind({});

view.args = { 
    uniqueClasses: 'custom text' , placeholderText: 'input'
};
