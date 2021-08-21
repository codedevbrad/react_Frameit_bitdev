import React from 'react';

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

export default InputAnimated;