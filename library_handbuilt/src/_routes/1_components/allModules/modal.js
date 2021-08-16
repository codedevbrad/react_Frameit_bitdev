import React , { useContext , useEffect , useState } from 'react';
import { Modal , LoadingProgress } from '../@codedevbrad_react_frameit/index';
const { ModalSingle , ModalMultiple , ModalHelper } = Modal;
const { LoadingBar , LoadingBarHelper } = LoadingProgress;

const ModalSingleShowcase = ( ) => {

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
      <section>

        <h3> modal single </h3>
        <code>
        {
`
import { LoadingProgress } from './@codedevbrad_reactFrameit/index';
const { ModalSingle } = Modal;
const { LoadingBar , LoadingBarHelper } = LoadingProgress;

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

<ModalSingle modal_id={ 'modal_id1'}
modal_btn_Class={ 'modal_button_1' }
           type={ 'right' } link={ 'modalsingle item' }
     saveMethod={ clicked }>
<div>
  <LoadingBar state={ loadingBar.state } textInit={ 'editing content' } textFinal={ 'edit successful' } />
  <h1> save content with single save  </h1>
</div>
</ModalSingle>
`
        }
        </code>


        <ModalSingle modal_id={ 'modal_id1'}
              modal_btn_Class={ 'modal_button_1' }
                         type={ 'right' } link={ 'modalsingle click' }
                   saveMethod={ clicked }>
            <div>
                <LoadingBar state={ loadingBar.state } textInit={ 'editing content' } textFinal={ 'edit successful' } />
                <h1> save content with single save  </h1>
            </div>
        </ModalSingle>

      </section>
    )
}

const ModalMultipleShowcase = ( ) => {

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
      <section>
          <h3> multiple modal component </h3>

          <ModalMultiple modal_id={ 'modal_id2'} modal_btn_Class={ 'modal_button_2' } type={ 'right' } link={ 'modal multiple items'}
                            state={ modal.state }
                      toggleModal={ modal.toggleModal }
                       closeModal={ modal.closeModal }
          >
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
      </section>
    )
}

const ModalShowcase = ( ) => {

    return (
      <div className="eachComponent_showcase showcase_modal">
            <ModalSingleShowcase />

            <ModalMultipleShowcase />
      </div>
    )
}

export default ModalShowcase;
