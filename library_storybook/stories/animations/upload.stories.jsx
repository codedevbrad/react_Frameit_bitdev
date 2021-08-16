
import React from 'react';

const ConsumeUpload = ( { ...props } ) => {
        return (
            <div>
                    hey
            </div>
        )
}

export default {
    title: 'Animation/fade',
    component: ConsumeUpload , 
    argTypes: {  }
};

const Template = (args) => <ConsumeUpload {...args} />;

export const view = Template.bind({});

view.args = { };
