import react , { useEffect } from "react"


const useScrollTimeout = ( {  
   func  = ( ) => console.log('not set function for end of scroll'),  
   delay = 2000 
} ) => {
   var timer = null;

   const scrollFunc = ( ) => {
      if ( timer !== null ) {
        clearTimeout(timer);        
      }
      timer = setTimeout( function( ) {
          func();
      } , delay );
   }  

    useEffect( ( ) => {
      window.addEventListener( 'scroll' , scrollFunc );
      return ( ) => {
          window.removeEventListener('scroll' , scrollFunc );
      }
    } , [ ] );
}

export default useScrollTimeout;