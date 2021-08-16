import React , { Fragment , useEffect , useState , useContext } from 'react';
import ReactDOM from 'react-dom';

import { ModuleContext , ModuleContextProvider } from './_contexts/moduleContext';
import { NavigationContextProvider } from './_contexts/navigateContext';

import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import { DefaultHeadSEO , HeadSeo } from './seoTag';

// ===  STATIC  === //
import AppMain from './_static_components/newLayout/_mainLayout__class';
import Header  from './_static_components/header/component_function';

// == DYNAMIC CHANGES TO PRESENT CHANGES FROM NAVBAR TO DISPLAY NAW PAGES == //
import RenderSidebar     from './_static_components/__renderSidebar';
import RenderMainSection from './_static_components/__renderMainSection';

// stylesheets //
import './_cssLibrary/class_reset.css';
import './_cssLibrary/class_app.scss';

const Main = ( ) => {

    const { currentLayoutIsLarge  } = useContext( ModuleContext );

    return (
        <Fragment>
            <HeadSeo title={ 'react_frameit'} description={ 'my main app description'}
                  keywords={ 'react , css' }
            />
            <AppMain layoutClass={ !currentLayoutIsLarge ? 'layout_minimal' : 'layout_fullsize' }
                          header={ <Header /> }
                         sideBar={ <RenderSidebar /> }
                     mainSection={ <RenderMainSection /> }
            />
        </Fragment>
    )
}

const App = () => {

    return (
          <Router>
              <ModuleContextProvider>
                  <NavigationContextProvider>
                      <Main />
                  </NavigationContextProvider>
              </ModuleContextProvider>
          </Router>
    );
}

export { App };

ReactDOM.render( <App /> , document.getElementById('root') );
