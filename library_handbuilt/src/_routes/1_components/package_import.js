import React from 'react';
import Component from './allModules/component';

import AnimatedElementShowcase from './allModules/animatedElement';
import TooltipShowcase  from './allModules/tooltip';
import CarouselShowcase from './allModules/carousel';
import DropdownShowcase from './allModules/dropdown';
import ModalShowcase    from './allModules/modal';
import AccorditionShowcase from './allModules/accordition';
import ProgressBarsShowcase from './allModules/progressBars';
import SWitchElementsShowcase from './allModules/switchElements';
import AvatarElementShowcase  from './allModules/avatarElements';
import HeaderResponsiveShowcase from './allModules/responsiveHeader';
import BetterFormShowcase       from './allModules/betterForm';
import LoadingProgressShowcase  from './allModules/loadingProgress';
import RatingFormShowcase       from './allModules/rating';

let allModules = `
    import {
      Animations , Carousel , Dropdown , StripeNavigation , Tooltip , ContentLoad ,
      LoadingPlaceholer , LoadingProgress , Modal , ProgressBars , Navbar , SwitchElements , TransitionBetween ,
      PaginateList , Accordition , AvatarElement , HeaderResponsive , Form

    } from '@codedevbrad/react_frameit';

    const { AnimatedElement , AnimateCSS } = Animations;
    const { PaginateListScroll , PaginateListScrollHelper } = paginateList;
    const { BetterForm , Inputs , UploadForm } = Form;
    const { ProgressBar , ProgressgBarHelper } = ProgressBars;
    const { ContentWithLoad , TrackLoadingHelper } = ContentLoad;
    const { LoadingBar , LoadingBarHelper  , LoadingButton , LoadingButtonHelper } = LoadingProgress;
    const { LoadingCard , TrackLoadingCardHelper } = LoadingPlaceholer;
    const { ModalSingle , ModalMultiple , ModalHelper } = Modal;
`;

let modules = [
    { name: 'AnimatedUi'        , subComponents: [ ] , Component : RatingFormShowcase      } ,
    { name: 'Accordition'       , subComponents: [ ] , Component : AccorditionShowcase     } ,
    { name: 'AvatarElement'     , subComponents: [ ] , Component : AvatarElementShowcase   } ,
    { name: 'Animations'        , subComponents: [ 'AnimatedElement' , 'AnimateCSS' ] , Component : AnimatedElementShowcase } ,
    { name: 'HeaderResponsive'  , subComponents: [ ] , Component : HeaderResponsiveShowcase } ,
    { name: 'Form'              , subComponents: [ 'BetterForm' , 'Inputs' , 'UploadForm' ] , Component : BetterFormShowcase } ,
    { name: 'Carousel'          , subComponents: [ ] , Component : CarouselShowcase } ,
    { name: 'Dropdown'          , subComponents: [ ] , Component : DropdownShowcase } ,
    { name: 'StripeNavigation'  , subComponents: [ ] , Component  } ,
    { name: 'Tooltip'           , subComponents: [ ] , Component : TooltipShowcase } ,
    { name: 'ContentLoad'       , subComponents: [ 'ContentWithLoad'  , 'TrackLoadingHelper'     ] , Component } ,
    { name: 'LoadingPlaceholer' , subComponents: [ 'LoadingCard'      , 'TrackLoadingCardHelper' ] , Component } ,
    { name: 'LoadingProgress'   , subComponents: [ 'LoadingBar'       , 'LoadingBarHelper'       ] , Component : LoadingProgressShowcase } ,
    { name: 'ProgressBars'      , subComponents: [ 'ProgressBar'      , 'ProgressgBarHelper' ] ,            Component : ProgressBarsShowcase } ,
    { name: 'Modal'             , subComponents: [ 'ModalSingle'      , 'ModalMultiple' , 'ModalHelper' ] , Component : ModalShowcase } ,
    { name: 'Navbar'            , subComponents: [ ] , Component  } ,
    { name: 'SwitchElements'    , subComponents: [ ] , Component : SWitchElementsShowcase } ,
    { name: 'PaginateList'      , subComponents: [ 'PaginateListScroll' , 'PaginateListScrollHelper' ] , Component }
];

let moduleJson = {
    packageNPM: '@codedevbrad/reactFrameit' ,
    modules:     modules ,
    allModules:  allModules ,
    npmLink:     '' ,
    gitHubLink: 'https://github.com/codedevbrad/react_frameit'
}

export  {
  moduleJson
}
