import React, { useState } from 'react';

import AnimatedElement from '../app/index';

const AnimateShowcase = ( { ...props } ) => {

    const fakeStyle = {
        width: '100%' , height: '150px' , color: 'black',
        background: '#f2f2f2' , display: 'flex' ,
        alignItems: 'center' , justifyContent: 'center' ,
        marginTop: '20px'
    }

    let [ start , setStart ] = useState( false );

    const triggerAnimations = ( ) => {
        setStart( !start );
    }

    return (
        <>
            <p onClick={ () => triggerAnimations() }> trigger animations </p>

            <AnimatedElement start={ start } { ...props }>
                <div style={ fakeStyle }>
                    <h1> element slides down controlled </h1>
                </div>
            </AnimatedElement>

            <AnimatedElement { ...props }>
                <div style={ fakeStyle }>
                    <h1> element slides down on render </h1>
                </div>
            </AnimatedElement>
        </>
    )
}

export default {
    title: 'Animation/cssanimations',
    component: AnimateShowcase , 
    argTypes: {
        animated: {
            control: { type: 'radio' } , 
            options: [ 'fade' , 'slide-down' , 'slide-up' ]
        }
    }
};

const Template = (args) => <AnimateShowcase {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered' , 
}

Component.args = { 
    classNames: 'rf_animate' , animated: 'fade'
};

