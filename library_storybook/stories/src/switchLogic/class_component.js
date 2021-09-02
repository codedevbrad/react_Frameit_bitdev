import React, { Fragment , useEffect } from 'react';

const SwitchElements = ( { toShow , options } ) => {
     return (
        <Fragment>
              { options[ toShow ] }
        </Fragment>
     )
}

export default SwitchElements;


// const [ switchValue , changeSwitch ] = useState( 0 );
//
// <SwitchElements toShow={ switchValue } options={ [
//               <Game /> ,
//               <Dashboard />
// ] } />
