import React, { Fragment , useEffect } from 'react';

const SwitchElements = ( { toShow , options } ) => {
     return (
            <>
                  { options[ toShow ] }
            </>
     )
}

export default SwitchElements;
