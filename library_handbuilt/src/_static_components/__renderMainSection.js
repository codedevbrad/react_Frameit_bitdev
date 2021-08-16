import React , { useContext } from 'react';
import { NavigationContext } from '../_contexts/navigateContext';

import { routes } from '../appRoutes';

const RenderMainSection = (  ) => {

    let { currentNavigation } = useContext( NavigationContext );
    let { MainSection } = routes[ currentNavigation ];

    return (
          <MainSection />
    )
}

export default RenderMainSection;
