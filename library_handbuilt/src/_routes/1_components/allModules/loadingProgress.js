import React from 'react';
import { LoadingProgress } from '../@codedevbrad_react_frameit/index';

const { LoadingBar , LoadingBarHelper , LoadingButton , LoadingButtonHelper } = LoadingProgress;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


const LoadingBarMini = ( ) => {
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
      <section>

          <h3> LoadingBar </h3>

          <code>
            {
              `
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
                        //  await loadingBar__1.loaded();
                      });
              }

              return (
                  <LoadingBar state={ loadingBar__1.state } textInit={ 'editing content' }
                          textFinal={ 'edit successful' }
                          className={ "progressBar" }
                  />

                 <div onClick={ saveElement }>
                   content
                 </div>
              )
              `
            }
          </code>

          <LoadingBar state={ loadingBar__1.state } textInit={ 'editing content' } textFinal={ 'edit successful' }
                 className={ "progressBar" }
          />

         <div onClick={ saveElement }>
           content
         </div>
      </section>
    )
}

const LoadingButtonMini = ( ) => {
      let loadingButton__1 = new LoadingButtonHelper( { resetDelay : 2000 } );

      const startSave = async ( ) => {
          loadingButton__1.loading();
          await delay( 3000 );
          loadingButton__1.saved();
      }

      return (
          <section>
              <h3> LoadingButton </h3>
              <code>
              {
`
let loadingButton__1 = new LoadingButtonHelper( );

const startSave = async ( ) => {
    loadingButton__1.loading();
    await delay( 3000 );
    loadingButton__1.saved();
}

<LoadingButton clickFunction={ startSave } state={ loadingButton__1.state }
                    textInit={ 'saving files' }
                   textFinal={ 'files saved' }
                  buttonText={ 'upload' }
/>
`
              }
              </code>
              <LoadingButton clickFunction={ startSave } state={ loadingButton__1.state }
                                  textInit={ 'saving files' }
                                 textFinal={ 'files saved' }
                                buttonText={ 'upload' }
              />
          </section>
      )
}

const LoadingProgressShowcase = ( ) => {

      return (
          <div className="eachComponent_showcase showcase_loadingProgress">
              <LoadingBarMini />

              <LoadingButtonMini />
          </div>
      )
}

export default LoadingProgressShowcase;
