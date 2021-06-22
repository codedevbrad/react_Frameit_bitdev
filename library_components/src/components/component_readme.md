# react_frameit
Npm modules that gives you 10+ pre-made react components to use within your application.

# library host:
hosted with bit.dev

# important
code is still being created and will be added shortly.

```javascript

const { ProgressBar , ProgressgBarHelper } = ProgressBars;  
const { ContentWithLoad , TrackLoadingHelper } = ContentLoad;
const { LoadingBar  , LoadingBarHelper } = LoadingProgress;
const { LoadingCard , TrackLoadingCardHelper } = LoadingPlaceholer;
const { ModalSingle , ModalMultiple , ModalHelper } = Modal;
```

* [Go to animated Element](#animated-content)
* [Go to Carousel](#carousel)
* [Go to Tooltip](#tooltip)
* [Go to Dropdown](#dropdown)
* [Go to Navbar](#navbar)
* [Go to ProgressBars](#progressbar)
* [Go to Modal](#modal)
* [Go to Stripe-Navigation](#stripe-navigation)
* [Go to Loading](#loading)
* [Go to Loading-placeholder](#loading-with-a-placeholder)
* [Go to Loading-Bar](#loading-bar-which-shows-your-progress)
* [Go to scrollContent](#scrollable-content)
* [Go to SwitchElements](#switch-component)

[#animated-content]:(#animated-content)
# animated element
| props    | options     | proptype|
| ---------| ------------| --------
| animated | 'slide-up' 'slide-down' 'static' | string |
| wrapper  |  pass any string value to be assigned as a className to the element that wraps around your content | string |

```javascript
import { AnimatedElement } from '/';

<AnimatedElement animated={ 'slide-down' }>
    <h1> hell there </h1>
</AnimatedElement>

<AnimatedElement animated={ 'slide-up'} wrapper={ 'element_inAnimate'}>
    <h1> hell there </h1>
</AnimatedElement>

<AnimatedElement animated={ 'static'} wrapper={ 'element_inAnimate'}>
    <h1> hell there </h1>
</AnimatedElement>
```
[#carousel]:#carousel
# carousel
| props | description | proptype |
| ----- |-------------| -------- |
| s  | amount of boxes to display on a S sized window | `[ { max , min } , integer ]` |
| m  | amount of boxes to display on a M sized window | `[ { max , min } , integer ]` |
| l  | amount of boxes to display on a L sized window | `[ { max , min } , integer ]` |

```javascript
import { Carousel } from '/';
   const boxes = [
        { title: 'hello box 1' } ,
        { title: 'hello box 2' }
   ];
   render (
      <Carousel l={ [ { max: '1920px' , min: '600px' } , 5 ] }
                m={ [ { max: '599px'  , min: '0px'   } , 3 ] }
       >
            { boxes.map( ( eachbox , index ) =>
               <div className="box" key={ index }>
                   <p> { eachbox.title } </p>
               </div>
            )}
     </Carousel>
 )
```

[#tooltip]:#tooltip
# tooltip
```javascript
          import { Tooltip } from './';

         <Tooltip position={ 'right' } tip={ 'need help?' }>
           <h3 id="tip-large"> hover over top </h3>
         </Tooltip>

         <Tooltip position={ 'left' } tip={ 'click to find out more' }>
           <h3> hover over me right please do it again </h3>
         </Tooltip>

         <Tooltip position={ 'bottom' } tip={ 'click to find out more' }>
           <h3> hover over me right  </h3>
         </Tooltip>
```
| props | description | proptype |
| ----- |-------------| -------- |
| children | the html that should trigger the tooltip.  | html   |
| position | how you want the tooltip to appear when hovering over the children. | string |
| tip      | the text that appears inside your tooltip. | string |

[#dropdown]:#dropdown
# dropdown
```javascript
  import { Dropdown } from'./';
  <Dropdown dropdownText={ 'dropdown title' } dropdownButton={ <i className='fas fa-sort-down'> </i> } direction={ 'left' }
          style_override={ 'dropdown__1' }>
       <li> first element   </li>
       <li> secrond element </li>
       <li> third element   </li>
  </Dropdown>
```
| props    | description | proptype |
| ---------|-------------| -------- |
| children | your list of content that is shown when the dropdown is triggered | string |
| dropdownText | title of the dropdown | string |
| dropdownButton | an icon for the dropdown | html |
| direction | choose between 'left' or 'right' | string |
| style_override | a Css id for your dropdown component | string |


[#navbar]:#navbar
# Navbar
```javascript
import { Navbar } from './';

const NavbarContainer = () => {

   const links = [
      { icon: 'far fa-credit-card'  , title: 'home' ,
        subLinks: [
            { subTitle: 'transactions' } ,
            { subTitle: 'Statements'   } ,
            { subTitle: 'breakdown'    }
        ]
      } ,
      { icon: 'far fa-envelope-open', title: 'messages' ,
        subLinks: [
            { subTitle: 'inbox'     } ,
            { subTitle: 'subscriptions' }
        ]
      } ,
      { icon: 'far fa-credit-card'  , title: 'analytics' ,
        subLinks: [
          { subTitle: 'transactions' } ,
          { subTitle: 'Statements'   } ,
          { subTitle: 'breakdown'    }
        ]
      }
   ]

   const subLinkTrigger = ( data ) => {
       console.log( data );
   }

    return (
        <Navbar styleOverride={ 'navbar_style__1' } direction={ 'left' } data={ links }
                        color={ ['#2c3e50' , '#5a477f' ] }
                  subLinkCall={ subLinkTrigger }
                      customX={ <i class="fas fa-times"></i> }/>
    );
}
```
| props    | description | proptype |
| ---------|-------------| -------- |
| styleOverride | pass an css id to the navbar component| string |
| direction     | choice of 'left' or 'right   | string |
| data          | your top level and sub menu  | array  |
| color         | top level background and sub-menu background | array |
| subLinkCall   | pass a function to handle click events on subMenu items | function |
| customX       | pass a custom icon for the subMenu close button | html |


[#progressbar]:#progressbar

# progressbar
```javascript
    const { ProgressBar , ProgressgBarHelper } = ProgressBars;  

    const ExampleComponent = (  ) => {
         let progressBar__1 = new ProgressBarHelper();
         let progressBar__2 = new ProgressBarHelper();

         const toggleProgress = ( ) => {
            progressBar__1.toggleProgress();
         }

         useEffect( ( ) => {
            progressBar__2.start();
         }, [ ] );
    }
    <ProgressBar startingCompletion={ 65  } completionTime={ 10 } state={ progressBar__1.state } />
    <ProgressBar startingCompletion={ 100 } completionTime={ 50 } state={ progressBar__2.state } />

    <h2 onClick={ () => toggleProgress() }> play or pause  </h2>
    <h2 onClick={ () => progressBar__1.pause() }> pause </h2>

```
### initialising a progress bar
``` javascript
const progress__1 = new ProgressgBarHelper();
progress__1.start();
progress__1.pause();
progress__1.toggleProgress();
```

| props    | description | proptype |
| ---------|-------------| -------- |
| startingCompletion  | what % of the progress bar should be filled.                | integer |
| completionTime      | time in seconds for how long it should to get from the startingCompletion to 0% | integer |
| state               | determines if the progress bar should start or pause        | boolean |

[#modal]:(#modal)
# modal

### modal with a single form
```javascript
const { ModalSingle } = Modal;
const { LoadingBar , LoadingBarHelper } = LoadingProgress;

const ElementModalSingle = ( ) => {
    let loadingBar = new LoadingBarHelper( { save: 2000 , final: 3000 } );

    const getFakeData = ( ) => {
        return new Promise( ( resolve , reject ) => resolve() );
    }

   var clicked = ( hideModal ) => {
      loadingBar.loading();
      getFakeData()
          .then( async (data) => {
              await loadingBar.loaded();
              // do whatever here . . .
              hideModal( false );
          });
   }

   return (
     <Fragment>
             <ModalSingle modal_id={ 'modal_id1'} modal_btn_Class={ 'modal_button_1' }
             type={ 'right' } link={ 'modalsingle item' } saveMethod={ clicked }>
                     <div>
                         <LoadingBar state={ loadingBar.state } textInit={ 'editing content' } textFinal={ 'edit successful' } />
                         <h1> save content with single save  </h1>
                     </div>
             </ModalSingle>
     </Fragment>
   )
}
```
| props    | description | proptype |
| ---------|-------------| -------- |
| modal_id | pass a css id to add your own styling for the modal | string |
| modal_btn_class | pass a css class to add your own styling for the modal button which triggers the modal popup | string |
| type | determins layout of modal on screen choose between 'left' , 'right' , 'top' , 'bottom'  | string |
| link | Text passed to the modal button | string |
| saveMethod | pass a function to be executed when you save content within the modal | function |

### modal with miltiple forms.
```javascript
const { LoadingBar  , LoadingBarHelper } = LoadingProgress;
const { ModalMultiple , ModalHelper } = Modal;

const ElementModalMultiple = ( ) => {
    let loadingBar_1 = new LoadingBarHelper( { save: 2000 , final: 3000 } );
    let loadingBar_2 = new LoadingBarHelper( { save: 2000 , final: 3000 } );
    const modal = new ModalHelper();

    const getFakeData = ( ) => {
        return new Promise( ( resolve , reject ) => resolve() );
    }

    const click_method_1 = ( ) => {
        loadingBar_1.loading();
        getFakeData()
            .then( async (data) => {
                await loadingBar_1.loaded();
            });
    }
    const click_method_2 = ( ) => {
        loadingBar_2.loading();
        getFakeData()
            .then( async (data) => {
                await loadingBar_2.loaded();
            });
    }

    return (
        <ModalMultiple modal_id={ 'modal_id2'} modal_btn_Class={ 'modal_button_2' } type={ 'right' } link={ 'modal multiple items'}                               state={ modal.state } toggleModal={ modal.toggleModal } closeModal={ modal.closeModal }>
        <div>
              <LoadingBar state={ loadingBar_1.state } textInit={ 'editing content 1' } textFinal={ 'edit successful' } />
              <h1> save content 1 </h1>
              <div onClick={ () => click_method_1() }> send item 1 </div>
        </div>
        <div>
              <LoadingBar state={ loadingBar_2.state } textInit={ 'editing content 2' } textFinal={ 'edit successful' } />
              <h1> save content 2 </h1>
              <div onClick={ () => click_method_2() }> send item 2 </div>
        </div>
        </ModalMultiple>
    )
}
```
| props    | description | proptype |
| ---------|-------------| -------- |
| modal_id | pass a css id to add your own styling for the modal | string |
| modal_btn_class | pass a css class to add your own styling for the modal button which triggers the modal popup | string |
| type | determins layout of modal on screen choose between 'left' , 'right' , 'top' , 'bottom'  | string |
| link | Text passed to the modal button | string |

#### initialising a new modal and passing to <ModalMultiple /> as props
| props    | value to be passed    |
| ---------|-----------------------|  
| state       | modal.state        |   
| toggleModal | modal.toggleModal  |    
| closeModal  | modal.closeModal   |    

[#animated-nav]:(#stripenav)

# Stripe navigation.

```javascript
const ElementExample = ( ) => {

   const ContentSmall = ( ) => {
        return (
            <div id="navigation_small_menu">
                <ul>
                      <li> about us </li>
                      <li> what we get upto </li>
                      <li> how we do it </li>
                </ul>
            </div>
        )
   }
   const ContentLarge = ( ) => {
        return (
            <div id="navigation_large_menu">
                <div>
                      <ul>
                          <li> pricing </li>
                          <li> why we price our products </li>
                          <li> query our pricing model </li>
                      </ul>
                </div>
            </div>
        )
   }

    const navStructure = [
        { topLevel: 'home'    , subLinks: false } ,
        { topLevel: 'about'   , subLinks: <ContentSmall />  } ,
        { topLevel: 'pricing' , subLinks: <ContentLarge />  }
    ]

    return (
        <StripeNavigation elements={ navStructure } topLevelClass={ "nav_toplink" } />
    )
}
```
| props    | Description   |
| ---------|-------------  |  
| elements | Each navigation topLevel link and subMenu items | react class containing html elements |
| topLevelClass | Css class for each topLevel link  |

[#loading]:(#loading)
# loading
```javascript

const { ContentWithLoad , TrackLoadingHelper } = ContentLoad;

const ElementWithLoad = ( ) => {
       const dataHasLoaded1 = new TrackLoadingHelper();
       const [ dataEl , setData ] = useState( { } );
       const getFakeData = ( ) => {
           return new Promise( ( resolve , reject ) => {
                 setTimeout( ( ) => {
                    resolve( [ { name: 'brad' } , { name: 'josh' } ] );
                 } , 2000 );
           });
       }

       useEffect( ( ) => {
            getFakeData()
                .then( data => setData( data ))
                .then( data => dataHasLoaded1.loadedState() );
            return function cleanup() {
              console.log('unmounted');
            };
       }, [ ] );

       return (
         <div className="component_load_contain">
              <ContentWithLoad state={ dataHasLoaded1.state }>
                    <h1> element </h1>
                    <p> content  </p>
              </ContentWithLoad>
         </div>
       )
}
```

| props    | Description | proptype |
| ---------|------------ | -------- |
| children | what html should be displayed once loading is complete  | html |
| state    | determines if Loading has finished using a true or false value | boolean |

#### initialising a new loading state and passing to <ContentWithLoad /> as props
```javascript
   const dataHasLoaded1 = new TrackLoadingHelper();
   dataHasLoaded1.loadedState();
   dataHasLoaded1.state

```

[#loading-with-a-placeholder]:(#loading-with-a-placeholder)
# Loading with a placeholder

```javascript

const { LoadingCard , TrackLoadingCardHelper } = LoadingPlaceholer;

const ElementWithCardLoad = ( ) => {

       const dataHasLoaded1 = new TrackLoadingCardHelper();
       const [ dataEl , setData ] = useState( { } );

       const getFakeData = ( ) => {
           return new Promise( ( resolve , reject ) => {
                 setTimeout( ( ) => {
                    resolve( { name: 'brad' }  );
                 } , 2000 );
           });
       }

       useEffect( ( ) => {
            getFakeData()
                .then( data => setData( data ))
                .then( data => dataHasLoaded1.loaded() );
       }, [ ] );

       return (
         <div className="component_load_contain">
             <LoadingCard state={ dataHasLoaded1.state } cards={ 1 }>
                  <div>
                      <li> { dataEl.name } </li>
                  </div>
             </LoadingCard>
         </div>
       )
}
```
| props    | Description | proptype |
| ---------|------------ | -------- |
| children | what html should be displayed once loading is complete.  | html |
| state    | determines if Loading has finished using a true or false value. | boolean |
| cards    | the amount of placeholder bars to be displayed while your content loads. | boolean |

#### initialising a new loading state and passing to <LoadingCard /> as props
```javascript
   const dataHasLoaded1 = new TrackLoadingHelper();
   dataHasLoaded1.loaded();
   dataHasLoaded1.state
```
[#loading-bar-which-shows-your-progress]:(#loading-bar-which-shows-your-progress)

# loading bar which shows your progress
```javascript

const { LoadingBar  , LoadingBarHelper } = LoadingProgress;

const LoadWithinElement = ( ) => {

     let loadingBar__1 = new LoadingBarHelper( { save: 2000 , final: 3000 } );

     const getFakeData = ( ) => {
         return new Promise( ( resolve , reject ) => {
              resolve();
         });
     }

    const saveElement = ( ) => {
        loadingBar__1.loading();
        getFakeData()
            .then( async (data) => {
                await loadingBar__1.loaded();
            });
    }

    return (
      <div className="third-element">
          <LoadingBar state={ loadingBar.state } textInit={ 'editing content' } textFinal={ 'edit successful' } />
          <div onClick={ saveElement }>
            content
          </div>
      </div>
    )
}
```

| props    | Description | proptype |
| ---------|------------ | -------- |
| state    | determines if LoadingBar has begun and finished using a true or false value. | boolean |
| textInit | pass text which should determine what is happening when your loading bar starts | string |
| textFinal | pass text which should determine what is happening when your loading bar has finished | string |

#### initialising a new loading state and passing to <LoadingBBar /> as props
```javascript
     //'save' determines the time to wait after showing the value 'textFinal'
     // and 'final' for the time to wait to remove the loadingBar from view after 'save' has finished.
     let loadingBar__1 = new LoadingBarHelper( { save: 2000 , final: 3000 } );
     loadingBar__1.state;
     loadingBar__1.loading();
     loadingBar__1.loaded();
```

[#scrollable-content]:(#scrollable-content)

# scrollable content
```javascript
import { ScrollComponent }
     <div id="scrollbar_sideview">
            <ScrollComponent ifNeeded={ false }>
                <div>
                    <p> scrollable content </p>
                </div>
            </ScrollComponent>
     </div>
```
| props    | Description | proptype |
| ---------|------------ | -------- |
| ifNeeded | show scrollbar always or set to true if scrollbar is shown only when needed | boolean |

[switch-component]:(#switch-component)
# switch component
```javascript
import { Dropdown , SwitchElements } from './';
const Game = ( ) => { return ( <div> game component </div>  ) }
const Dashboard = ( ) => { return ( <div> dashboard component </div> ) }

const SwitchElementContainer = ( ) => {
      const [ switchValue , changeSwitch ] = useState( 0 );
      return (
          <Fragment>
                <Dropdown dropdownText={ 'dropdown title' } dropdownButton={ <i className='fas fa-sort-down'> </i> }
                             direction={ 'left' } style_override={ 'dropdown__1' }>
                     <li onClick={ () => changeSwitch(0) }> game element      </li>
                     <li onClick={ () => changeSwitch(1) }> dashboard element </li>
                </Dropdown>
                <SwitchElements toShow={ switchValue } options={ [
                    <Game /> ,
                    <Dashboard />
                ] } />
          </Fragment>
      )
}
```
| props    | Description | proptype |
| ---------|------------ | -------- |
| toShow   | a integer value to render a single element. If you have 3 elements to render, you're value should be between 0 - 2. | Integer |
| options  | pass your components that can possibly be rendered.  | React components. |

. . .
