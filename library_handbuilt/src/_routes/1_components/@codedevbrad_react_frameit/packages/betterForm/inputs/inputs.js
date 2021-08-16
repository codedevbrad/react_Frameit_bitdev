import React , { useState , useEffect , useRef } from 'react';
import { EyesOpenIcon , EyesClosedIcon } from '../../../packages_util/svgIcons/index';
import './inputStyles.css';



function InputHelper ( ) {

    const [ translatePosition , setTranslatePos ] = useState( 0 );

    const [ isValid    , setValid ] = useState( false );
    const [ inputState , setState ] = useState( '' );

    this.isValid = isValid;
    this.markValid = ( boolean ) => setValid( boolean );

    this.animationValue = translatePosition;

    this.setTransition = ( value ) => {
      setTranslatePos( value );
    }

    this.resetTransition = ( ) => {
      setState( '' );
      setTranslatePos( 0 );
    }

    this.inputvalue = inputState;

    this.getValue = ( ) => {
        return inputState;
    };
    this.setValue = ( value ) => {
        setState( value );
    }
    this.resetValue = ( ) => {
        setState( '' );
    }
}

const InputEmail = ( { state } ) => {

    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const emailValidation = ( text ) => {
        return text.match( mailFormat ) ? true : false;
    }

    const handleInputChange = ( text ) => {
        let isValid = emailValidation( text );
        state.markValid( isValid );
        state.setValue( text );
    }

    return (
        <div className="reactFrameit_form-field__email">
          <span className={ `email_input__${ state.isValid ? 'valid' : 'notValid' }` }>
              @
          </span>
          <input type="email" value={ state.inputvalue } onChange={ ( e ) => handleInputChange( e.target.value ) } />
        </div>
    )
}


const InputAnimated = ( { state , className , placeHolder , type } ) => {

    const formField_placeholder = useRef( null );
    const formField = useRef( null );

    const animated = ( ) => {
        let height = ( formField.current.clientHeight / 2 ) -(  formField_placeholder.current.clientHeight / 2 ) - 5;
        state.setTransition( `-${ height}` );
    }

    const resetAnimated = ( ) => {
        state.setTransition( 0 );
    }

    const handleInputChange = ( text ) => {
        state.setValue( text );
    }

    return (
      <div className={` ${ className } reactFrameit_form-field__animated`} ref={ formField }>
          <span onClick={ ( e ) => animated( ) } ref={ formField_placeholder } style={{ transform: `translateY( ${ state.animationValue }px)` } }>
               { placeHolder }
          </span>
          <input type={ type } value={ state.inputState } onChange={ ( e ) => handleInputChange( e.target.value ) }
              onFocus={ ( ) => animated()  }
          />
      </div>
    )
}

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

const InputSwitch = ( ) => {
    return (
      <label className="reactFrameit_switch">
          <input type="checkbox" />
          <span className="reactFrameit_switch__slider"></span>
      </label>
    )
}

export const Inputs = {
    InputPassword , InputSwitch , InputEmail , InputAnimated , InputHelper
}
