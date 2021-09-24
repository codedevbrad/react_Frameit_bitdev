import { useState } from "react"
import useScrollTimeout from "../hook/index";

function ScrollDelayComponent( { delay = 1000 } ) {

    const func = ( ) => console.log('ended scroll');

    useScrollTimeout( { func: func , delay } );
 
    return (
        <div style={ { height: '2000px' }}>
            hey
        </div>
    );
}

export default {
    title: 'Hooks/useScrollTmeout' ,
    component: ScrollDelayComponent ,
    argTypes: { }
};

const Template = (args) => <ScrollDelayComponent {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    delay: 1500
};
