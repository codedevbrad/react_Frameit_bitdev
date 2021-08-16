
import React , { Fragment , useState , useEffect } from 'react';
import Avatar from './avatar';

import axios from 'axios';
import './styles.css';

const InputElement = ( { watchAvatarBoolean , index , initiate , update , type , inputName , avatarWatch } ) => {
      const [ state , setState ] = useState( '' );

      const inputTyping = ( el ) => {
         let value = el.target.value;
         setState( value );
         update(   value , index );
         if ( watchAvatarBoolean ) avatarWatch( value.length );
      }

      useEffect( (  ) => {
          initiate( { inputName , value : index , index: index } );
      } , [ ] );

      return (
          <input type={ type } value={ state.value } placeholder={ inputName } onChange={ e => inputTyping( e ) } />
      )
}

const BetterForm = ( { classOverride , errorMsg , useAvatar , onPost , url , formElements } ) => {

   const [ formStates , setFormStates ] = useState( [ ]);

   const [ eyesPos , setEyesPos ] = useState( [ '-10px' , '-3px' ] );
   const [ closeEyesState , setEyesClosed ] = useState( false );

   const detectPosition = ( length ) => {
        if ( length === 0 ) {
            return [ '-10px' , '-3px' ];
        }
        else if ( length > 0  && length < 4 ) {
            return [  '-9px' , '-2px' ];
        }
        else if ( length >= 4 && length < 7 ) {
            return [  '-8px' , '-2px' ];
        }
        else if ( length >= 7 && length < 11 ) {
            return [  '-7px' , '-2px' ];
        }
        else if ( length >= 11 && length < 12 ) {
            return [  '-6px' , '-2px' ];
        }
        else if ( length >= 12 && length < 14 ) {
            return [  '-4px' , '-2px' ];
        }
        else {
            return [  '-2px' , '-2px' ];
        }
   }

   const textTyping = ( length ) => {
        let eyes = detectPosition( length );
        setEyesPos( eyes );
        setEyesClosed( false );
   }

   const passTyping = ( length ) => {
        if ( length === 0 ) {
           setEyesClosed( false );
        }
        if ( length > 0 ) {
           setEyesClosed( true );
        }
   }

   const func = ( value ) => {
      setFormStates( formStates => [ ...formStates , value ] );
   }

   const updateFunc = ( value , index ) => {
      let clone = [...formStates] ,
             el = clone[ index ];
             el.value = value;
      setFormStates( clone );
   }

   const submit = ( ) => {
          // const config = { headers: { 'Content-Type': 'application/json' } };
          // const body = JSON.stringify( { formStates } );
          //
          // axios.post( url , body , config )
          //      .then(  req => req.body )
          //      .then( data => onPost( { success: true  , data } ) )
          //      .catch( err => onPost( { success: false , data } ) );
   }

   return (
        <div className={`reactFrameit_betterForm ${ classOverride }`}>
            <div className="reactFrameit_betterForm_svg">
                { useAvatar && <Avatar dimensions={ { height: '210px' } } eyesPos={ eyesPos } closeEyes={ closeEyesState } /> }
            </div>

            <div className="reactFrameit_betterForm_form">

                { errorMsg[0] &&
                  <div className="betterForm_form__errorMsg">
                      <h3> { errorMsg[1] } </h3>
                  </div>
                }

                <form>
                      { formElements.map( ( each , index ) =>
                          <Fragment key={ `form-element__${index} `}>

                                <InputElement key={ `form-element__${index} `} index={ index } initiate={ func }
                                    update={ updateFunc } type={ each.type }
                                    inputName={ each.inputName }
                                    avatarWatch={ each.secret ? passTyping : textTyping }
                                    watchAvatarBoolean={ useAvatar }
                                />

                          </Fragment>
                      )}

                      <div className="reactFrameit_betterForm_form_submit" onClick={ submit }>
                          <p> submit </p>
                      </div>
                </form>
            </div>
        </div>
   )
}

export { BetterForm };
