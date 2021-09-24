import React , { useState } from 'react';
import Sidenav from '../app/index';
import MenuBurger from '../../../icons/burgerMenu/app/index'; 


const SideNavShowcase = ( { ...props } ) => {

    const [ nav , toggleNav ] = useState( false );

    const clicked = ( state ) => {
        toggleNav( state );
    }

    return (
        <div>
            <MenuBurger type={1} state={ nav } isClicked={ clicked } />

            <Sidenav { ...props } handle={ [ nav , toggleNav ] }>
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
        }
    }
};

const Template = (args) => <SideNavShowcase {...args} />;

export const Component = Template.bind({ });

Component.parameters = { }

Component.args = { 
    theme: 'dark' , id: 'dropdown_unique' , classNames: 'class1 class2' , flow: 'left' , 
    elements: [
        { title: 'about' , link: '/about' } , 
        { title: 'contact' , link: '/contact' }
    ]
}