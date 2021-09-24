import React , { useEffect, useState } from 'react';

import ContentLoad , { TrackLoadingHelper } from '../app/loader';


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


const ConsumeContentLoad = ( { ...props } ) => {

    let newLoader = new TrackLoadingHelper();

    const getFakeData = ( ) => {
        return new Promise( async ( resolve , reject ) => {
            await delay( 1500 );
            resolve();
        });
     }
 
     const getData = ( ) => {
         getFakeData()
             .then( async (data) => {
                newLoader.loaded();
             });
     }

    useEffect( ( ) => {
        getData();
    } , [ ] );

    return (
        <div>
            <ContentLoad loaded={ newLoader.state } { ...props }>
                <p> hey  got me some data </p>
            </ContentLoad>
        </div>
    )
}

export default {
    title: 'Loading/ContentLoad',
    component: ConsumeContentLoad , 
    argTypes: { }
};

const Template = (args) => <ConsumeContentLoad {...args} />;

export const view = Template.bind({});

view.args = {
    customClasses: ''
};
