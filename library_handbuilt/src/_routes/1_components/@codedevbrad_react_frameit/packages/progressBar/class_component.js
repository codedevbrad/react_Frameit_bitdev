
import React , { Fragment , useEffect , useState , useRef } from 'react';

import './class_styles.css';


function ProgressBarHelper (  ) {

        const [ progressState , setProgress ] = useState( false );

        this.state = progressState;

        this.pause = ( ) => {
           setProgress( false );
        }

        this.start = ( ) => {
           setProgress( true );
        }

        this.toggleProgress = ( ) => {
          setProgress( !progressState );
        }
}

const ProgressBar = ( { startingCompletion , completionTime , state , id } ) => {

     startingCompletion = startingCompletion || 100;
     const [progressCount, updateProgress ] = useState( startingCompletion );
     const [timeCount , changeTime ] = useState( completionTime );

     const tick = Math.round(( startingCompletion / completionTime ) * 100 ) / 100;

     const element = useRef( null );

      useEffect( ( ) => {
          if ( state ) {
            var interval = setInterval( () => {
              updateProgress( progressCount => progressCount - tick );
              changeTime( timeCount => timeCount - 1 );
              let time = element.current.getAttribute('data-time');
              if ( time == 0 ) {
                 clearInterval( interval );
              }
            }, 1000 );

            return () => {
               clearInterval(interval);
            }
          }

      } , [ state ] );

    return (
        <Fragment>
            { progressCount } { state ? 'progress' : 'pause' }
            { timeCount }
            <div className="reactFrameit_progressBar">
                  <div data-time={ timeCount } ref={ element }
                       className="reactFrameit_progressBar_inner" style={ { width :`${ progressCount }%` } }>  </div>
            </div>
        </Fragment>

    )
}
export { ProgressBar , ProgressBarHelper };
