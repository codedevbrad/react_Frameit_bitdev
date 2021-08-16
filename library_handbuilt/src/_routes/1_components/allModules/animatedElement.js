import React , { useState } from 'react';
import { Animations } from '../@codedevbrad_react_frameit/index';

const { AnimatedElement , AnimateCSS } = Animations;

const fakeStyle = {
    width: '100%' , height: '150px' , color: 'black',
    background: '#f2f2f2' , display: 'flex' ,
    alignItems: 'center' , justifyContent: 'center' ,
    marginTop: '20px'
}

const AnimateCSSMini = ( ) => {
    return (
        <section>
            <h3> Animate.css Library </h3>
            <code>
                {
                  `
prop types :
type:
[ 'fadeIn' , 'fadeOut' , 'slideIn' , 'slideOut' ]

speeds :
[  'slower' , 'slow' , 'fast' , 'faster' ]

delay :
[ '5s' , '4s' , '3s' , '2s' ]

<AnimateCSS className={ 'coolAnimation' } TagName={ 'div' } type={ 'fadeIn' } speed={ 'fast' } delay={ '3s' }>
        element fades in.
</AnimateCSS>

<AnimateCSS className={ 'coolAnimation' } TagName={ 'h3' } type={ 'fadeOut' } speed={ 'slow' } delay={ '4s' }>
        element fades out.
</AnimateCSS>
                  `
                }
            </code>

            <a href="https://animate.style/"> uses animate.css for animations </a>

            <AnimateCSS className={ 'coolAnimation' } TagName={ 'div' } type={ 'fadeIn' } speed={ 'fast' } delay={ '3s' }>
                    element fades in.
            </AnimateCSS>

            <AnimateCSS className={ 'coolAnimation' } TagName={ 'h3' } type={ 'fadeOut' } speed={ 'slow' } delay={ '4s' }>
                    element fades out.
            </AnimateCSS>
        </section>
    )
}

const AnimatedCustomMini = ( ) => {

    const [ start , setStart ] = useState( false );

    const triggerAnimations = ( ) => {
        setStart( !start );
    }

    return (
      <section>
          <h3> animatedElement components </h3>
          <code>
            {
        `
  <AnimatedElement start={ start } animated={ 'slide-down' } wrapper={ 'element_inAnimate'}>
  <div style={ fakeStyle }>
    <h1> element slides down </h1>
  </div>
  </AnimatedElement>

  <AnimatedElement start={ start } animated={ 'static' } wrapper={ 'element_inAnimate'}>
  <div style={ fakeStyle }>
    <h1> element fade doesnt move </h1>
  </div>
  </AnimatedElement>
        `
            }
          </code>

          <AnimatedElement start={ start } animated={ 'slide-down' } wrapper={ 'element_inAnimate'}>
              <div style={ fakeStyle }>
                    <h1> element slides down </h1>
              </div>
          </AnimatedElement>

          <AnimatedElement start={ start } animated={ 'static' } wrapper={ 'element_inAnimate'}>
              <div style={ fakeStyle }>
                    <h1> element fade doesnt move </h1>
              </div>
          </AnimatedElement>
          <p onClick={ () => triggerAnimations() }> trigger animations </p>
      </section>
    )
}

const AnimatedElementShowcase = ( ) => {
    return (
        <div className="eachComponent_showcase showcase_animatedElement">
            <AnimateCSSMini />
            <AnimatedCustomMini />
        </div>
    )
}

export default AnimatedElementShowcase;
