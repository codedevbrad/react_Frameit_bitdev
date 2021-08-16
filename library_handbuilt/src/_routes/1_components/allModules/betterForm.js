import React , { useContext , useEffect , useState } from 'react';
import { Form } from '../@codedevbrad_react_frameit/index';

const { BetterForm , Inputs , UploadForm } = Form;
const { InputPassword , InputSwitch , InputEmail , InputAnimated , InputHelper } = Inputs;

const BetterFormMini = ( ) => {

    const [ errorMsg , setErrorMag ] = useState( [ false , '' ] );

    const handleFormSubmit = ( data ) => {
       console.log( data );
       setErrorMag([ true , 'some error value' ]);
    }

  return (
    <section>
    <h3> betterForm components </h3>

    <code>
      {
`
const { BetterForm } = Form;

const [ errorMsg , setErrorMag ] = useState( [ false , '' ] );

const handleFormSubmit = ( data ) => {
console.log( data );
setErrorMag([ true , 'some error value' ]);
}
<BetterForm errorMsg={ errorMsg } useAvatar={ true } onPost={ handleFormSubmit }
  url={ '/data/url' } classOverride={ 'form_cool' } formElements={
     [ {  inputName : 'username' , type: 'text'    , secret: false } ,
       {  inputName : 'email'    , type: 'text'    , secret: false } ,
       {  inputName : 'password' , type: 'password', secret: true  }
     ]
}/>
`
      }
    </code>

    <BetterForm errorMsg={ errorMsg } useAvatar={ true } onPost={ handleFormSubmit }
                url={ '/data/url' } classOverride={ 'form_cool' } formElements={
             [ {  inputName : 'username' , type: 'text'    , secret: false } ,
               {  inputName : 'email'    , type: 'text'    , secret: false } ,
               {  inputName : 'password' , type: 'password', secret: true  }
             ]
    }/>
    </section>
  )
}

const UploadFormShowcase = ( ) => {

    // { url , type , modal_id , upload_btn_class , link , saveMethod }
    const imagesHaveSaved = ( data ) => {
        console.log( data );
    }

    return (
      <section>
      <h3> UploadForm component </h3>
      <code>
        {
        `
        const { UploadForm } = Form;
        <UploadForm />
        `
        }
      </code>

      <UploadForm link={ 'save images' } saveMethod={ imagesHaveSaved } />

      </section>
    )
}

const InputSwitchMini = ( ) => {
    return (
      <section>
          <h3> InputSwitch component </h3>
          <code>
            {
  `

  const { InputSwitch } = Inputs;

  <InputSwitch />
  `
            }
          </code>
          <InputSwitch />
      </section>
    )
}

const InputAnimatedMini = ( ) => {

    const inputForm__1 = new InputHelper();

    const animateToggle = ( ) => {
          inputForm__1.resetTransition();
    };

    const getValue = ( ) => {
          console.log( inputForm__1.getValue() );
    }

    return (
        <section>
            <h3> animated input </h3>
            <code>
            {
`
const { InputAnimated , InputAnimatedHelper } = Inputs;

const inputForm__1 = new InputHelper();

const animateToggle = ( ) => {
      inputForm__1.resetTransition();
};

const getValue = ( ) => {
      console.log( inputForm__1.getValue() );
}

return (
  <InputAnimated state={ inputForm__1 } className={ 'animatedInput__custom' } placeHolder={ 'email' } type={ 'text' } />

  <p onClick={ () => getValue() }> get input value </p>

  <p onClick={ () => animateToggle( ) }> reset input </p>
)

`
            }
            </code>

            <InputAnimated state={ inputForm__1 } className={ 'animatedInput__custom' } placeHolder={ 'email' } type={ 'text' } />

            <p onClick={ () => getValue() }> get input value </p>

            <p onClick={ () => animateToggle( ) }> reset input </p>

        </section>
    )
}

const InputEmailMini = ( ) => {

    const inputForm__1 = new InputHelper();

    return (
      <section>
      <h3> InputEmail component </h3>
      <code>
        {
`
const { InputEmail } = Inputs;

<InputEmail state={ inputForm__1 }/>
`
        }
      </code>
      <InputEmail state={ inputForm__1 }/>
      </section>
    )
}

const InputPasswordMini = ( ) => {

    const inputForm__1 = new InputHelper();

    return (
      <section>
      <h3> InputPassword component </h3>
      <code>
        {
`
const { InputPassword } = Inputs;

<InputPassword state={ inputForm__1 }/>
`
        }
      </code>
      <InputPassword state={ inputForm__1 }/>
      </section>
    )
}

const BetterFormShowcase = ( ) => {

    return (
        <div className="eachComponent_showcase showcase_betterForm">

              <code>
              {
`
const { InputPassword , InputSwitch , InputEmail , InputAnimated , InputAnimatedHelper } = Inputs;
`
              }
              </code>

              <BetterFormMini />

              <InputAnimatedMini />

              <InputEmailMini />

              <InputPasswordMini />

              <UploadFormShowcase />

              <InputSwitchMini />

        </div>
    )
}

export default BetterFormShowcase;
