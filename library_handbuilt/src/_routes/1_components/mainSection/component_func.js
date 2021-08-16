
import React , { useContext , useEffect , useState } from 'react';
import { ModuleContext } from '../../../_contexts/moduleContext';
import { moduleJson  } from '../package_import';

import './allModules.scss';
import './component_style.scss';

const AllComponents = ( ) => {
    return (
      <code>
          { moduleJson.allModules }
      </code>
    )
}

const EachComponent = ( ) => {
    const { currentModule , setCurrentModule } = useContext( ModuleContext );
    const { name , subComponents , Component } = moduleJson.modules[ currentModule ];
    return (
      <div className="main_section__eachComponent">
          <h1> { name } </h1>
          <code>
                {
                  `import { ${ name } } from ${ moduleJson.packageNPM };`
                }
          </code>
          { subComponents.length > 0 &&
            <code>
                {
                  `const { ${ subComponents } } = ${ name };`
                }
            </code>
          }
          <Component />
      </div>
    )
}

const MainSection = (  ) => {
      const { singleComponent , setSingleComponent } = useContext( ModuleContext );
      return (
        <div id="app_main_section">
            { singleComponent ? <EachComponent /> : <AllComponents /> }
        </div>
      )
}

export default MainSection;
