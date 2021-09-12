import react from 'react';
import './style.scss';

const ButtonHover = ( { value } ) => {
    return (
        <div className="reactFrameit_button_slide"> 
             <div className="button_slide slide_right"> { value } </div>
        </div>
    )
}

export default ButtonHover;