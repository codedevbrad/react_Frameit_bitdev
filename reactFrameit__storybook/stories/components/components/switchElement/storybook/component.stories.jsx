import React , { useState } from 'react';
import Dropdown from '../../../dropdowns/dropdown/app/dropdown';

import SwitchElements from '../app/index';
import AnimatedElement from '../../../animation/animationCss/app/index';

const Game = ( ) => { 
    return ( 
        <div> 
             <AnimatedElement animated={ 'fade' }>
                <div>
                    <h1> element slides down on render </h1>
                    <p> game </p>
                </div>
            </AnimatedElement>
        </div> 
    )
}

const Dashboard = ( ) => { 
    return ( 
        <div> 
             <AnimatedElement animated={ 'slide-down' }>
                <div>
                    <h1> element slides down on render </h1>
                    <p> dashboard </p>
                </div>
            </AnimatedElement>
        </div> 
    )
}

const SwitchElementShowcase = ( ) => {
    const [ switchValue , changeSwitch ] = useState( 0 );

    const dropdown_required = {

        method: ( value ) => {
            changeSwitch( value );
        } , 

        items:
        [
            { element: 'game' , value: 0 } , 
            { element: 'dashboard' , value: 1 } 
        ]
    }

    return (
        <>
            <SwitchElements toShow={ switchValue } options={ [
                        <Game /> ,
                        <Dashboard />
            ] } />  
            
            <Dropdown dropdownText={ 'dropdown' } dropdownRequired={ dropdown_required } flow={ 'horz' } theme={ 'dark' } />
        </>
    )
}

export default {
    title: 'Components/SwitchElement',
    component: SwitchElementShowcase , 
    argTypes: {
        theme: {
            description: 'control the color theme of the dropdown.' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: ['light' , 'dark' ] , 
            control: { type: 'radio' } 
        } 
    }
};

const Template = (args) => <SwitchElementShowcase {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = { };
