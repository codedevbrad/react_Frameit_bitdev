import React , { useState } from 'react';
import './componentStyle.scss';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function LoadingButtonHelper ( { resetDelay } ) {

        // [ shouldSlideIn , determine text state ];
        const [ showLoading , setLoading ] = useState( [ false , false ]);

        this.state   = showLoading;
        this.loading = ( ) => setLoading( [ true  , false ]);
        this.saved   =  async ( ) => {
            setLoading( [ true  , true  ] );
            await delay( resetDelay );
            setLoading( [ false , false ] );
        }
        this.reset = ( ) => setLoading( [ false , false ]);
}

const LoadingButton = ( { clickFunction , state , textInit , textFinal , buttonText } ) => {

    return (
        <div className="reactFrameit__buttonProgress">
              <div className={`upload_progress` } style={ { height: state[0] ? '100%' : '0px' } } >
                    <h3 style={ { visibility: state[0] ? 'visible' : 'hidden' } }>
                        {!state[1] ? textInit : textFinal }
                    </h3>
              </div>

            <div className="upload" onClick={ ( ) => clickFunction( ) } >
                <div className="upload_btn">
                    <h3> { buttonText } </h3>
                </div>
            </div>
        </div>
    )
}

export {
  LoadingButton , LoadingButtonHelper
}
