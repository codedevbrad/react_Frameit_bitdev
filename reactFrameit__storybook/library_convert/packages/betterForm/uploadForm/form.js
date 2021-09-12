import React , { Fragment , useState , useEffect , useRef , useContext } from 'react';
import axios from 'axios';
import { UploadContext , UploadContextProvider } from './uploadContext';
import { PlusIcon , Trashcan } from '../../../packages_util/svgIcons/index';

import './styles.scss';

const CompletingDisplay = ( ) => {

   const { saveTypeSuccess } = useContext( UploadContext );

    return (
        <div className="react_frameit_uploadForm__complete">
              { saveTypeSuccess[0] &&
                  <Fragment>
                      { saveTypeSuccess [1] ?
                        <img src="https://res.cloudinary.com/dezoqwmss/image/upload/v1598037367/reactFrameit/download_xd8jnl.png" />
                      :
                        <img className="complete_error" src="https://res.cloudinary.com/dezoqwmss/image/upload/v1598038585/reactFrameit/download2_dwuqzm.png" />
                      }
                  </Fragment>
              }
        </div>
    )
}

const SavingImages = ( { completeSave } ) => {

    const { files , addFiles , setDelete , saveProcess , startSaveProcess , saveTypeSuccess , setSaveType } = useContext( UploadContext );

    const [ textState , changeText ] = useState( 'saving files ...' );


    const cloudinaryUpload = ( element ) => {
           const filesSelected = element.target.files;
           const filesArray = Object.values( filesSelected );
           const combined   = files.concat( filesArray );

           addFiles( combined );
    }

    const startSave = ( ) => {
        if ( files.length > 0 ) {
              startSaveProcess( true );
              setTimeout( ( ) => {
                        changeText( 'saved files' );
                        setSaveType( [ true , true ] );
              } , 2000 );
        }
    }

    return (
        <div className="react_frameit_uploadForm__controls">
                <div className="control_button">

                      <div className={`upload_progress upload_progress__${ saveTypeSuccess[1] ? 'success' : 'error' }`}
                               style={ { height: saveProcess ? '100%' : '0px' }
                      }>
                            <h3 style={ { visibility: saveProcess ? 'visible' : 'hidden' } }> { textState } </h3>
                      </div>

                      <div className="upload" onClick={ ( ) => startSave( ) } >
                          <div className="upload_btn">
                              <h3> upload files </h3>
                          </div>
                      </div>

                      <div className="react_frameit_uploadForm__controls_submit">
                            <input type="file" name="filename" multiple onChange={ ( e ) => cloudinaryUpload( e ) } id="img" style={ { display: 'none'} } />
                            <label htmlFor="img"> <PlusIcon  /> </label>
                      </div>
                </div>
        </div>
    )
}

const DisplayingImages = ( ) => {

    const { files , addFiles } = useContext( UploadContext );

    const deleteFile = ( file , index ) => {
          let files_copy = [ ...files ];
          files_copy.splice( index , 1 );
          addFiles( files_copy );
    }

    return (
        <div className="react_frameit_uploadForm__preview">
            { files.length == 0 &&
              <div className="react_frameit_uploadForm__preview_empty">
                <p> no files uploaded </p>
              </div>
            }
            { files.length > 0 &&
              <div className="react_frameit_uploadForm__preview_contains">
                  { files.map( ( file , index ) =>
                      <div className="item" key={ index }>
                                  <div className="file_name">
                                      { file.name }
                                  </div>
                                    <div className="file_deleteButton" onClick={ ( ) => deleteFile( file , index )  }>
                                        <Trashcan />
                                    </div>
                      </div>
                  )}
              </div>
            }
        </div>
    )
}

const FormElement = ( { completeSave } ) => {

    const { saveProcess } = useContext( UploadContext );

    return (
      <div className="react_frameit_uploadForm">
          <div className="uploadForm_top">
              { !saveProcess ? <DisplayingImages /> : <CompletingDisplay /> }
          </div>
          <SavingImages completeSave={ completeSave }/>
      </div>
    )
}

const UploadForm = ( { url , type , modal_id , upload_btn_class , link , saveMethod } ) => {

      const [ modalState , toggleModal ] = useState( false );

      const toggleDropdown = ( e ) => {
          toggleModal( !modalState );
      }

      const returnData = ( ) => {
          saveMethod( 'some data here');
      }

      return (
        <Fragment>
            <div className={`reactFrameit_uploadform__modal_button ${ upload_btn_class}` } onClick={ e => toggleDropdown(e) }> { link } </div>
            { modalState &&
            <div className="reactFrameit_uploadform__modal_all">
                <div className="reactFrameit_uploadform__modal_overlay" onClick={ e => toggleModal( false ) }>  </div>
                <div className={`reactFrameit_uploadform__modal_contain reactFrameit_uploadform__modal_contain`}>
                     <div className={ `reactFrameit_uploadform__modal_style` } id={ modal_id }>
                        <UploadContextProvider>
                           <FormElement completeSave={ returnData }/>
                        </UploadContextProvider>
                     </div>
                </div>
            </div>
            }
        </Fragment>
      )
}

export {
  UploadForm
}
