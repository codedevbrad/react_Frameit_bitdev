import React, { Fragment , useState , useEffect , useRef , useCallback } from 'react';

const ContentWithLoad = ( { children , state } ) => {

    return (
        <Fragment>
            { state[0] === false &&
              <div className="component_load">
                   <i className="fas fa-circle-notch fa-spin"></i>
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

function TrackLoadingHelper () {
    const  [dataLoaded , loadData ] = useState([ false , 'hidden']);

    this.state = dataLoaded;
    this.loadedState = ( ) => loadData([ true , 'animated fadeIn']);
};

export { ContentWithLoad , TrackLoadingHelper  };
