import React , { useState } from 'react';

import Accordition from '../app/module_component';

const data = [ 
    { 
        title: 'accord title 1' , 
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co'
    } , 
    { 
        title: 'accord title 2' , 
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co'
    }
]

const AccorditionStory = ( { ...props } ) => {
        return (
            <div>
                <Accordition data={ data } { ...props } />
            </div>
        )
}


export default {
    title: 'Components/Accordition',
    component: AccorditionStory , 
    argTypes: { }
};


const Template = (args) => <AccorditionStory {...args} />;

export const Basic = Template.bind({ });

Basic.parameters = { }

Basic.args = {  };
