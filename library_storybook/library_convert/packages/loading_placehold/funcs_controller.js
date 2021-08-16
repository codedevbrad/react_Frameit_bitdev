import React, { Fragment , useState , useEffect , useRef , useCallback } from 'react';
import './funcs_styling.css';

const LoadingCard = ( { children , state , cards } ) => {

    return (
        <Fragment>
            { state[0] === false &&
              <div className={ `loadingCards  ${ state[1] }`}>
                  { [...Array(cards)].map( ( el ) =>
                    <div className="card">
                      <div className="bars">
                        <div className="bar bar1 loading"></div>
                        <div className="bar bar2 loading"></div>
                      </div>
                    </div>
                  )}
              </div>
            }
            { state[0] === true &&
              <div className={ state[1] }>
                { children }
              </div>
            }
        </Fragment>
    )
}

function TrackLoadingCardHelper () {
    const  [dataLoaded , loadData ] = useState([ false , 'hidden']);

    this.state = dataLoaded;
    this.loaded = ( ) => loadData([ true , 'animated fadeIn']);
};

export { LoadingCard , TrackLoadingCardHelper };
