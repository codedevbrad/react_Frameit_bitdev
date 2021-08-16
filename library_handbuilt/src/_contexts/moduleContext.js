import React , { createContext , useState } from 'react';

const ModuleContext = createContext();

const ModuleContextProvider = ( props  ) => {
    const [ currentModule , setCurrentModule ] = useState([ 0 ]);
    const [ currentLayoutIsLarge , setCurrentLayout ] = useState( true );
    const [ singleComponent , setSingleComponent ] = useState( false );

    const [ currentNPMModule , setcurrentNPMModule ] = useState([ 0 ]);

    return (
        <ModuleContext.Provider value={ {
             currentModule , setCurrentModule ,
             currentLayoutIsLarge , setCurrentLayout ,
             singleComponent , setSingleComponent ,

             currentNPMModule , setcurrentNPMModule 
        } }>
            { props.children }
        </ModuleContext.Provider>
    );
}

export {
  ModuleContext ,
  ModuleContextProvider
};
