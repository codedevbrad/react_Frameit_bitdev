import react, { useEffect, useState } from 'react';
import './style.scss';

import Loader from '../../../loading/loading/app/load';
import Theme from '../../../../components/colorTheme/app';

const delay = ( ms ) => new Promise( resolve => setTimeout( resolve, ms ));

const useStateParentChange = ( stateChange ) => {
    const [ state , toggle ] = useState( false );

    useEffect( ( ) => {
        toggle( stateChange );
    } , [ stateChange ] );

    return [ state , toggle ];
}

const ButtonUpload = ( 
    { themeMode = 'light' , br = false , btnValue = '' , typeset = 'start' ,
      upload = {
          call: ( ) => new Promise( ( res , rej ) => res('yahh' ) ) , 
           err: ( err ) => console.log( err ) , 
           completeReset: true
      }
    } 
) => {

    let [ state , toggle ] = useStateParentChange( typeset );

    let checkReset = async ( completeReset ) => {
        if ( completeReset ) {
            await delay( 2000 );
            toggle('start');
        }
    }

    let handleClicked = ( ) => {
        let { call , err , completeReset } = upload;
        toggle('progress');
        call()
            .then( async res => {
                await delay( 4000 ); 
                toggle('complete');
                await checkReset( completeReset );
                console.log( res );
            })
            .catch( async errMsg => {
               
                await delay( 4000 );  
                toggle('error');
                await checkReset( completeReset );
                err( errMsg );
            });
    }

    return (
        <Theme themeMode={ themeMode } br={ br }>
            <div className="reactFrameit_buttonUpload" onClick={ ( ) => handleClicked( ) }> 
                    { state == 'start' && <p> { btnValue } </p> } 
                    { state == 'start_reset' && <p> { btnValue } </p> } 

                    { state == 'error' && 
                        <span className="material-icons-outlined">
                            error_outline
                        </span>
                    }

                    { state == 'progress' && 
                    <div className='icon'> 
                        <Loader />
                    </div> 
                    }
                    { state == 'complete' && 
                        <span className="material-icons-outlined">
                           check_circle
                        </span>
                    } 
            </div>
        </Theme>
    )
}

export default ButtonUpload;