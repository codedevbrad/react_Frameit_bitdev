import React , { useState , useEffect , useRef } from 'react';
import { EyesOpenIcon , EyesClosedIcon } from '../../../library_convert/packages_util/svgIcons/index';
import './inputStyles.css';

// whats this for? //

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
