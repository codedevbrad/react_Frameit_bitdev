import React, {  useState , useEffect , Fragment } from 'react';

import './style.scss';

function ModalHelper  (  ) {

    const [ modal , modalToggle ] = useState( false );

    this.state = modal;
    this.toggleModal = ( ) => modalToggle( modal ? false : true );
    this.closeModal  = ( ) => modalToggle( false );
}

/*
    type - left / center / right
    modalClass - classname for element that toggles modal
    link - text for element.
*/

const ModalMultiple = ( { children , type , modal_id , modal_btn_Class , link , state , toggleModal , closeModal } ) => {

  return (
    <Fragment>
        <li className={`reactFrameit_modal_button ${ modal_btn_Class}` } onClick={ e => toggleModal() }> { link } </li>
        { state &&
        <div className="reactFrameit_modal_all">
            <div className="modal_overlay" onClick={ e => closeModal( false ) }>  </div>
            <div className={`modal_contain modal_contain_${ type ? type : 'default' }`}>
                 <div className={ `modal_style modal_${ type ? type : 'default'}`} id={ modal_id } >
                    { children }
                 </div>
            </div>
        </div>
        }
    </Fragment>
  )
}

/*
    type - left / center / right
    modalClass - classname for element that toggles modal
    link - text for element.
    saveMethod - method to trigger from parent when you click to save.
*/


const ModalSingle = ( {  children , type , modal_id , modal_btn_Class , link , saveMethod } ) => {

      const [isToggle , setToggle ] = useState(false);

      const toggleDropdown = ( e ) => {
          isToggle ? setToggle(false) : setToggle(true);
      }

  return (
    <Fragment>
        <li className={`reactFrameit_modal_button ${ modal_btn_Class}` } onClick={ e => toggleDropdown(e) }> { link } </li>
        { isToggle &&
        <div className="reactFrameit_modal_all">
            <div className="modal_overlay" onClick={ e => setToggle( false ) }>  </div>
            <div className={`modal_contain modal_contain_${ type ? type : 'default' }`}>
                 <div className={ `modal_style modal_${ type ? type : 'default'}` } id={ modal_id }>
                    { children }
                    <div onClick={ () => saveMethod( setToggle ) }> send item </div>
                 </div>
            </div>
        </div>
        }
    </Fragment>
  )
}
export { ModalSingle , ModalMultiple , ModalHelper };
