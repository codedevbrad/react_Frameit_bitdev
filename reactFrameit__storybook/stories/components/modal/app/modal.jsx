import React, { Fragment, useState } from 'react';
import './modal.scss';

const saveNotSet = ( ) => console.log('saveMethod not yet set');

const ModalSingle = ( 
    { 
      Tag = 'div' , isForm = false , children , type = 'default' , modal_id = '' , modalClass = '' , 
      modalToggleTitle , saveMethod = saveNotSet , theme = 'light' , saveButtonText= 'submit' , 
    } 
) => {
 
    const [isToggle , setToggle ] = useState(false);

    const closeModal = ( ) => {
        setToggle( false );
    }

    const toggleDropdown = ( e ) => {
        setToggle( !isToggle );
    }

    return (
        <Fragment>
                <Tag className={`reactFrameit_modal_button` } onClick={ e => toggleDropdown(e) }> 
                    { modalToggleTitle } 
                </Tag>

                { isToggle &&
                    <div className={ `reactFrameit_modal_all` }>
                        <div className="modal_overlay" onClick={ e => setToggle( false ) }>  </div>
                        <div className={`modal_contain modal_contain_${ type }`}>
                            <div className={ `${ modalClass } reactFrameit-${ theme } modal_style modal_${ type ? type : 'default'}`} id={ modal_id }>
                                    <div className="modal_body"> 
                                         { children }
                                    </div>
                                    { isForm &&
                                    <div className="modal_submit"> 
                                            <div onClick={ () => saveMethod( closeModal ) } className={ 'rf-m-ms-button' }> 
                                               { saveButtonText } 
                                             </div>
                                    </div>
                                    }
                            </div>
                        </div>
                    </div>
                }
        </Fragment>
    )
}

export default ModalSingle;