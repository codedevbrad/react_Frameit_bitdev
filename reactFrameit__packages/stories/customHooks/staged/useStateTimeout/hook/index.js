import react , { useState , useRef , useEffect } from "react"

const useStateTimeout = ( 
    { initialValue = '', 
      returnFunc = ( ) => console.log('not set function to be called after x seconds.') , 
      timeout = 1500
    } ) => {  

      const [value, setValue] = useState( initialValue ); 
      const [ isFirst , setFirst ] = useState( true );

      const timeoutRef = useRef(null);        
      
      useEffect( ( ) => {
          if ( isFirst ) {
            setFirst( false );
          }
      } , [ ] );

      useEffect( ( ) => {           
                       
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout( ( ) => { 
          timeoutRef.current = null;         
          !isFirst ? returnFunc( value ) : null;       
        }, timeout );                 
                    
      }, [ value ] );       

      return [ value , setValue ];
}

export default useStateTimeout;