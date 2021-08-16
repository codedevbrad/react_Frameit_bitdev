import React , { useContext , useEffect , useState } from 'react';

import { ModuleContext } from '../../../_contexts/moduleContext';

import { moduleJson , appJson } from '../package_import';

import './component_styles.scss';

const Sidebar = ( ) => {

    const { setCurrentModule , setSingleComponent } = useContext( ModuleContext );

    const setModule = ( index ) => {
        setSingleComponent( true );
        setCurrentModule( index );
    }

    return (
      <nav className="app_sidebar">
          <div className="sidebar-title">
            <h1> components </h1>
          </div>
          <div id="sidebar_modulemenu">
              <ul>
                  <li onClick={ () => setSingleComponent( false ) }> All modules </li>
                  { moduleJson.modules.map ( ( module , index ) =>
                      <li key={ `${ module.name }-${index}` }
                        onClick={ ( ) => setModule( index ) }>
                            { module.name }
                      </li>
                  ) }
              </ul>
          </div>
      </nav>
    )
}

export default Sidebar;
