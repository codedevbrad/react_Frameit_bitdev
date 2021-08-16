
import React from 'react';

// 1_components
import MainSection from './_routes/1_components/mainSection/component_func';
import Sidebar     from './_routes/1_components/sidebar/component_function';

// 2_npmModules

const DummyComponent = ( ) => {
    return (
        <div> dummy </div>
    )
}

const DefaultSidebar = ( ) => {
    return (
        <div> hello </div>
    )
}

let routes = [
   { icon: 'fas fa-house-user'   , title: 'explore'    , Sidebar: DummyComponent , MainSection : DummyComponent } ,
   { icon: 'fas fa-campground'   , title: 'components' , Sidebar: Sidebar        , MainSection : MainSection    } ,
   { icon: 'fas fa-campground'   , title: 'npm modules', Sidebar: DummyComponent , MainSection:  DummyComponent } ,
   { icon: 'fab fa-discord'      , title: 'layouts'    , Sidebar: DummyComponent , MainSection : DummyComponent } ,
   { icon: 'fas fa-bug'          , title: 'Antjs'      , Sidebar: DummyComponent , MainSection : DummyComponent } ,
   { icon: 'fas fa-shield-alt'   , title: 'ui design'  , Sidebar: DummyComponent , MainSection : DummyComponent } ,
   { icon: 'fab fa-discord'      , title: 'community'  , Sidebar: DummyComponent , MainSection : DummyComponent }
];

let routesLess = routes.map( ( { icon , title } ) => {
  return { icon , title }
});

export {
    routes , routesLess
}
