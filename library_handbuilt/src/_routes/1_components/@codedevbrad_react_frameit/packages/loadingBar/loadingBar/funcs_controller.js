import React, { Fragment , useState , useEffect , useRef , useCallback } from 'react';

import './funcs_styles.css';


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


const LoadingBar = ( { state , textInit , textFinal , className } ) => {
    const text = !state[1] ? textInit : textFinal;

    return (
      <Fragment>
      { state[0] &&
          <div className={`progress_bar ${ className }`}>
              <div className="bar_text">
                <h3 className="progress_text"> {text} </h3>
              </div>
              <div className="bar_icon">
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
              </div>
          </div>
      }
      </Fragment>
    )
}

function LoadingBarHelper ( { save , final } ) {

        const [ showLoading , setLoading ] = useState( [ false , false ]);
        this.state = showLoading;
        this.loading = ( ) => setLoading( [ true , false ]);
        this.loaded = async ( ) =>  {
          await delay( save );
                setLoading( [ true , true ] );
          await delay( final );
                setLoading( [ false , false ]);
        }
}

export { LoadingBar , LoadingBarHelper };
