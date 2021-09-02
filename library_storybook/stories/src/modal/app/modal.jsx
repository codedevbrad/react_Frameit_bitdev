import React, { Fragment, useState } from 'react';
import './modal.css';

const ModalSingle = ( 
    { 
      Tag = 'div' , isForm = false , children , type = 'default' , modal_id = '' , navigationClass = '' , 
      modalToggleTitle , saveMethod , theme = 'light'
    } 
) => {
 
    const [isToggle , setToggle ] = useState(false);

    const toggleDropdown = ( e ) => {
        setToggle( !isToggle );
    }

    const submit = ( ) => {
        saveMethod();
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
                            <div className={ `${ navigationClass } reactFrameit-${ theme } modal_style modal_${ type ? type : 'default'}` } id={ modal_id }>
                                    <div className="modal_body"> 
                                         { children }
                                    </div>
                                    { isForm &&
                                    <div className="modal_submit"> 
                                         <div onClick={ () => saveMethod( setToggle ) }> 
                                            send item 
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