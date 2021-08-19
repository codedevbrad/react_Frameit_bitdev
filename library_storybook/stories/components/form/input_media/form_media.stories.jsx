import React , { useState } from 'react';

import MediaFormUpload from './form_media';


const ConsumeMediaForm = ( { uniqueClasses }) => {
    const [ state , setState ] = useState(false);
    return (
        <MediaFormUpload state={ state } change={ setState } uniqueId={ '12345' }
          uniqueClasses={ uniqueClasses }
        />
    )
}


export default {
    title: 'Form/Form_media',
    component: ConsumeMediaForm , 
    argTypes: {
        state: {
            control: { disable: true }
        } , 
        change: {
            control: { disable: true }
        }
    }
};

const Template = (args) => <ConsumeMediaForm {...args} />;

export const view = Template.bind({});

view.args = { 
    uniqueClasses: ''
};
