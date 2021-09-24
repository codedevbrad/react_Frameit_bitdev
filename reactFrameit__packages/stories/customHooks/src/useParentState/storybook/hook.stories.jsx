import React from 'react';

import useStateParentChange from '../hook/index';

const UseHook = ( { name } ) => {

    let [ state , update ] = useStateParentChange( name );

    return (
        <div className="useHook">
                { state }
                <input value={ state } onChange={ ( e ) => update( e.target.value ) } />
        </div>
    )
}

export default {
    title: 'Hooks/useParentState' ,
    component: UseHook ,
    argTypes: { }
};

const Template = (args) => <UseHook {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    name: 'harry'
 };
