import react, { useEffect, useState } from 'react';
import './style.scss';

const useStateParentChange = ( stateChange ) => {
    const [ state , toggle ] = useState( false );

    useEffect( ( ) => {
        toggle( stateChange );
    } , [ stateChange ] );

    return [ state , toggle ];
}

const Message = ( { stateChange , msgTitle , msgBody , horzPos = 'right' , vertPos = 'top' } ) => {

    let [ state , toggle ] = useStateParentChange( stateChange );

    return (
        <>
         { state && 
            <div className={ `reactFrameit_message rF_message_horz__${ horzPos } rF_message_vert__${ vertPos }` }>

                   <div className="rF_m_inner">
                            <div className="rF_m_closebtn" onClick={ () => toggle( false ) }> 
                                <span class="material-icons"> close </span>
                            </div>

                            <h1> { msgTitle } </h1>
                            <p>  { msgBody } </p>
                   </div>
            </div>
         }
        </>
    )
}

export default Message;