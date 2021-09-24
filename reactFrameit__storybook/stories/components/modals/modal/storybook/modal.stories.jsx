import React , { useState } from 'react';

import ModalSingle from '../app/modal';

export default {
    title: 'Modals/modal',
    component: ModalWrap , 
    argTypes: {
        type: {
            options: [ 'left' , 'right' , 'center' , 'center_fitted' ] , 
            control: { type: 'radio' } 
        } ,
        children: { 
            control: { disable: true }  
        } , 
        Tag: {
            options: [ 'div' , 'li' ] , 
            control: { type: 'select' }
        } , 
        isForm: {
            options: [ false , true ] , 
            control: { type: 'radio' }
        } , 
        saveButtonText: {

        }
    }
};


const Request = ( input ) => new Promise( ( resolve, reject ) => {
    resolve( `got data using ${ input }`);
});


const ModalWrap = ( { ...props } ) => {

    const [ text , setText ] = useState('');

    const save = ( modalClose ) => {
        Request( text )
            .then( ( data ) => {
                console.log( data );
            });
    }

    return (
        <ModalSingle saveMethod={ save } { ...props }>  
            <input type="text" value={ text } onChange={ ( e ) => setText( e.target.value ) } />
        </ModalSingle>
    )
}

const Template = (args) => <ModalWrap {...args} />;

export const component = Template.bind({});

component.args = {
    type: 'center' , modalToggleTitle: 'toggle modal' , Tag: 'div' , isForm: true , saveButtonText: 'save this'
};
