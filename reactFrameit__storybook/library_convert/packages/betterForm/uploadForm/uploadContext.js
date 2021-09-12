import React , { createContext , useState } from 'react';

const UploadContext = createContext();

const UploadContextProvider = ( props  ) => {
    const [ files , addFiles ] = useState( [ ] );
    const [ deleteState , setDelete ] = useState( false );
    const [ saveProcess , startSaveProcess ] = useState( false );

    // [ shouldShow success , successType ]
    const [ saveTypeSuccess , setSaveType ] = useState( [ false , true ] );


    return (
        <UploadContext.Provider value={
          { files , addFiles , deleteState , setDelete , saveProcess , startSaveProcess , saveTypeSuccess , setSaveType }
        }>
            { props.children }

        </UploadContext.Provider>
    );
}

export {
  UploadContext ,
  UploadContextProvider
};
