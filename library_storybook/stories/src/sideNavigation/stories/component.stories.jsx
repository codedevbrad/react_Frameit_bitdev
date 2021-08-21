import React , { useState } from 'react';

import Sidenav from '../app/index';

function FacebookMenuShowcase ( { ...props } ) {
    return (
        <>
            <FacebookMenu dropdownProvider={ <Cog /> } toplevel={ toplevel } submenus={ menus } { ...props } />
        </>
    );
}

export default {
    title: 'Menu/pushnav',
    component: Sidenav , 
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

const Template = (args) => <Sidenav {...args} />;

export const Component = Template.bind({ });

Component.parameters = { }

Component.args = { 
    theme: 'dark' , id: 'dropdown_uniqu' , classNames: 'class1 class2' , flow: 'left' , type: 'off-canvas'
}