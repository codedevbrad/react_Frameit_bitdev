import React, { useState } from 'react';

import delay from '../index';

const UsePackage = ( ) => {

    const [ name , changename ] = useState( 'brad' );

    const change = async ( ) => {
            await changename( 'brad is changing' );
            await delay( { wait: '700ms' } );
            await changename( 'brad changed' );
    };

    return (
        <div className="usePackage">
               <p onClick={ ( ) => change( ) }> change name </p>
               <p> { name } </p> 
        </div>
    )
}

export default {
    title: 'Packages/clientUtils/delay' ,
    component: UsePackage ,
    argTypes: { }
};

const Template = ( args ) => <UsePackage { ...args } />;

export const func = Template.bind({ });

func.parameters = {
    layout: 'centered'
}

func.args = { };
