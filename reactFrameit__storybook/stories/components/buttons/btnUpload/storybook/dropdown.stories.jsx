import React from 'react';
import ButtonUpload from '../app/index'; 

const ButtonUploadShowcase = ( { ...props } ) => {
    return (
        <ButtonUpload { ...props } />
    )
}

export default {
    title: 'Buttons/upload',
    component: ButtonUploadShowcase , 
    argTypes: {
        typeset: {
            description: 'control the color theme of the dropdown.' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: [ 'start_reset' , 'start' , 'progress' , 'complete' , 'error' ] , 
            control: { type: 'radio' } 
        } ,
        themeMode: {
            control: 'radio' , 
            options: [ 'light' , 'dark' , 'blue' ]
        } , 
        br: {
            control: 'radio' , 
            options: [ false , true ]
        }

    }
};

const Template = (args) => <ButtonUploadShowcase {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

const upload = {
    call: ( ) => new Promise( ( res , rej ) => rej('error message' ) ) , 
     err: ( err ) => console.log( err ) , 
     completeReset: false
}

Component.args = {
    btnValue:  <span className="material-icons"> arrow_drop_down </span> , upload: upload
};