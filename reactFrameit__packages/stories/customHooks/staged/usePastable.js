import React , { useEffect } from 'react';

const usePastable = ( element , handleOnPaste ) => {

    useEffect( ( ) => {

      element.addEventListener( 'onpaste' , handleOnPaste );
      return () => {
          element.removeEventListener( 'onpaste' , handleOnPaste );
      }

    } , [ ] );

}
