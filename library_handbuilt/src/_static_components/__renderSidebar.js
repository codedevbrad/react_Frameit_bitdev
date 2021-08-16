import React , { useContext , Fragment } from 'react';
import { NavigationContext } from '../_contexts/navigateContext';

import { routes } from '../appRoutes';

const RenderSidebar = (  ) => {

    let { currentNavigation } = useContext( NavigationContext );
    let { Sidebar } = routes[ currentNavigation ];

    return (
        <Sidebar />
    )
}

export default RenderSidebar;
