
import React, { Fragment, useState } from 'react';
import IconLoader from '../../../icons/load/app/index';
import './style.css';

export function TrackLoadingHelper () {
    const [ dataLoaded , loadData ] = useState(false);

    this.state = dataLoaded;
    this.loaded = ( ) => loadData( true );
};


const ContentLoad = ( { loaded , children , customClasses } ) => {

        return (
            <div className={`reactFrameit__content_load ${ customClasses }`} >
                { !loaded &&
                    <IconLoader />
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