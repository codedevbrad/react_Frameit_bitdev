
import React from 'react';

const TextFormUpload = ( { state , change , uniqueClasses = '' , placeholderText = '. . .' } ) => {
    return (
            <input type="text"   
            value={ state } 
            placeholder={ placeholderText } onChange={ ( evt ) => change( evt.target.value ) } 
            className={ uniqueClasses }
        />
    )
}

export default TextFormUpload;