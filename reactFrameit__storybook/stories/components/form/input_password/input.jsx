import React from 'react';

const InputPassword = ( { state } ) => {

    const [ inputStateisHidden , setState ] = useState( true );

    const toggle = ( ) => {
        setState( !inputStateisHidden );
    }

    const passwordValidation = ( text ) => {
        // Minimum eight characters, at least one letter, one number and one special character:
        let passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,20}$/;
        return text.match( passwordFormat ) ? true : false;
    }

    const handleInputChange = ( text ) => {
        let isValid = passwordValidation( text );
        state.markValid( isValid );
        state.setValue( text );
    }

    return (
        <div className="react_frameit_form-field__password">
            <input  type={ inputStateisHidden ? 'password': 'text' } value={ state.inputvalue }
                onChange={ ( e ) => handleInputChange( e.target.value ) }
            />
            <div onClick={ toggle }>
                { inputStateisHidden ? <EyesClosedIcon /> : <EyesOpenIcon /> }
            </div>
        </div>
    )
}

export default InputPassword;