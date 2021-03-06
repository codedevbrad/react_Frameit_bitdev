import React, { useState , useRef } from 'react';

import useComponentVisible from '../hook/index';

const UseHook = ( ) => {

    let [ state , updateState ] = useState( false );  

    const close = ( ) => {
        updateState( false );
    }
    
    let { ref } = useComponentVisible( state , close , [ ] , 'testhook' );

    return (
        <div className="useHook">
                <p onClick={ ( ) => updateState( !state ) }> toggle </p>
                { state && 
                    <div ref={ ref }>
                            clickable and goes awau
                    </div>
                }
        </div>
    )
}

export default UseHook;