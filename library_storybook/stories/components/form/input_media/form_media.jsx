
import React  , { useState } from 'react';
import './form_media.css';

const MediaFormUpload = ({ state , change , uniqueId , uniqueClasses = '' }) => {

	// Grabs name of file uploaded.
	let { name } = state;

	const changeHandler = (event) => {
		change(event.target.files[0]);
	};

	return (
		<div className={ `form_media ${ uniqueClasses }` }>
			<label htmlFor={ uniqueId }>
				upload
			</label>

			<input type="file" 
		    	   name="file" 
			   onChange={ changeHandler }  
				     id={ uniqueId }
      	    />

			<p> { !state ? 'no file selected' : name } </p>
		</div>
	)
}

export default MediaFormUpload;