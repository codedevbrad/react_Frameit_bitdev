import React , { useState } from 'react';
import Sidenav from '../app/index';


const SideNavShowcase = ( { ...props } ) => {
    return (
        <div>
            <Sidenav { ...props } >
                    <div>
                            <h1> some stuff here </h1>
                            <p> paragraphs here and there. </p>
                    </div>
            </Sidenav>
        </div>
    )
}

export default {
    title: 'Navigation/pushnav',
    component: SideNavShowcase , 
    argTypes: {
        theme: {
            options: ['light' , 'dark' ] , 
            control: { type: 'radio' } 
        } , 
        flow: {
            options: ['left' , 'right' ] , 
            control: { type: 'radio' }
        } , 
        type: {
            options: ['fix' , 'off-canvas'] , 
            control: { type: 'radio' }
        }
    }
};

const Template = (args) => <SideNavShowcase {...args} />;

export const Component = Template.bind({ });

Component.parameters = { }

Component.args = { 
    theme: 'dark' , id: 'dropdown_uniqu' , classNames: 'class1 class2' , flow: 'left' , type: 'off-canvas'
}