
import React , { Fragment , useState } from 'react';
import Loader from '../loading/load';
import './loader.css';

export function TrackLoadingHelper () {
    const  [dataLoaded , loadData ] = useState(false);

    this.state = dataLoaded;
    this.loaded = ( ) => loadData( true );
};


const ContentLoad = ( { loaded , children , customClasses } ) => {

        return (
            <div className={`content_load ${ customClasses }`} >
                { !loaded &&
                    <Loader />
                }
                { loaded && 
                    <Fragment>
                            { children }
                    </Fragment>
                }
            </div>
        )
}

export default ContentLoad;