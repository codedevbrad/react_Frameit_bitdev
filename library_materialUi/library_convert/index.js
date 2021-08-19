
// import path and use that for setting my default path pf project.
import AnimatedElement from './packages/animated_element/customAnimated/class_component';
import AnimateCSS      from './packages/animated_element/animateCSS/component';

import Carousel from './packages/carousel/carousel_main';
import Dropdown from './packages/dropdown/dropdown';
import StripeNavigation from './packages/stripe_nav/class_component';
import Tooltip          from './packages/tooltip/tooltip_class';
import SwitchElements   from './packages/switchLogic/class_component';
import TransitionBetween from './packages/switchLogic/class_component';
import Accordition      from './packages/accordition/module_component';
import AvatarElement    from './packages/avatarElement/component';
import Navbar           from './packages/layouts/navBar/class_component';
import HeaderResponsive from './packages/layouts/responsiveHeader/component_func';
import RatingForm       from './packages/ratingForm/component';

import { BetterForm , Inputs , UploadForm } from './packages/betterForm/exports';

import { PaginateListScroll , PaginateListScrollHelper } from './packages/paginateData/component_class';

import { ProgressBar , ProgressBarHelper } from './packages/progressBar/class_component';

import { ContentWithLoad , TrackLoadingHelper  } from  './packages/loading/loader';

import { LoadingCard , TrackLoadingCardHelper } from './packages/loading_placehold/funcs_controller';

import { LoadingBar , LoadingBarHelper } from './packages/loadingBar/loadingBar/funcs_controller';
import { LoadingButton , LoadingButtonHelper } from './packages/loadingBar/loadingButton/componentFunc';

import { ModalSingle , ModalMultiple , ModalHelper } from './packages/modal/modal';

var Form = {
   BetterForm , Inputs , UploadForm
}

var Animations = {
    AnimatedElement ,
    AnimateCSS
}

var PaginateList = {
  PaginateListScroll : PaginateListScroll ,
  PaginateListScrollHelper : PaginateListScrollHelper
}

var ProgressBars = {
    ProgressBar : ProgressBar ,
    ProgressBarHelper : ProgressBarHelper
}

var ContentLoad = {
    ContentWithLoad : ContentWithLoad ,
    TrackLoadingHelper : TrackLoadingHelper
}

var LoadingPlaceholer = {
    LoadingCard : LoadingCard ,
    TrackLoadingCardHelper : TrackLoadingCardHelper ,
}

var LoadingProgress = {
    LoadingBar : LoadingBar ,
    LoadingBarHelper : LoadingBarHelper ,
    LoadingButton    : LoadingButton ,
    LoadingButtonHelper : LoadingButtonHelper
}

var Modal = {
    ModalSingle : ModalSingle ,
    ModalMultiple : ModalMultiple ,
    ModalHelper : ModalHelper
}

export {
    Animations , Carousel , Dropdown , StripeNavigation , Tooltip , ContentLoad ,
    LoadingPlaceholer , LoadingProgress , Modal , ProgressBars , Navbar , SwitchElements , TransitionBetween ,
    PaginateList , Accordition , AvatarElement , HeaderResponsive , Form , RatingForm
 }
