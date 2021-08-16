import React , { createContext , useState } from 'react';

const NavigationContext = createContext();

const NavigationContextProvider = ( props  ) => {
    const [ currentNavigation , setCurrentNavigation ] = useState( 0 );

    return (
        <NavigationContext.Provider value={ { currentNavigation , setCurrentNavigation } }>
            { props.children }
        </NavigationContext.Provider>
    );
}

export {
    NavigationContext , NavigationContextProvider
}
