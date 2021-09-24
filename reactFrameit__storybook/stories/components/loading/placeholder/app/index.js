import React, { Fragment , useState , useEffect } from 'react';
import './style.scss';

import FlexBoxes from '../../../../components/flexbox/flexBoxes';
import FlexItem from '../../../../components/flexbox/flexItem';

const LoadingCard = ( { children , state , cards = 1 , rows = 1 } ) => {

    return (

        <Fragment>

            { state && 
            
                <Fragment>
                   { state[0] === false &&
                        <div className={ `reactFrameit_loadingCards ${ state[1] }`}>

                            <FlexBoxes layout={ rows }>
                                { Array.apply(null, { length: cards }).map((e, i) =>
                                    <FlexItem key={ i }> 
                                          <div className="card">
                                              <div className="bars">
                                                <div className="bar bar1 loading"></div>
                                                <div className="bar bar2 loading"></div>
                                              </div>
                                          </div>
                                      </FlexItem>
                                )}
                            </FlexBoxes>
                            
                        </div>
                   }
                   { state[0] === true &&
                        <div className={ state[1] }>
                            { children }
                        </div>
                   }
                </Fragment>
            }
          
        </Fragment>
    )
}

export function TrackLoadingCardHelper () {
    const [ dataLoaded , loadData ] = useState([ false , 'hidden']);

    this.state = dataLoaded;
    this.loaded = ( ) => loadData([ true , 'animated fadeIn']);
    this.reset = ( ) => loadData( [ false , 'hidden' ]);
};

export default LoadingCard;