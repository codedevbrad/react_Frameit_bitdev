import react from 'react';
import 'material-icons/iconfont/material-icons.css';

import './style.scss';

const IconDisplay = ( { title , icon } ) => {

    return (
        <div className='reactFrameit_materialIcon'>
            <h3> { title } </h3>

            <section>
                    <div className='light'> class </div> 
                    <div> material-icons </div>
            </section>

            <section>      
                   <div className='dark'> html </div>
                   <div> { icon } </div> 
            </section>

            <div className='icon'>
                 <span class="material-icons"> { icon } </span>
            </div>
        </div>
    )
}

const Example = ( ) => {
    return (
        <div> 
            <IconDisplay title={ 'arrow down' } icon={ 'arrow_drop_down' } />

            <IconDisplay title={ 'heart' } icon={ 'favorite_border' } />   
        </div>
    )
}

export default Example;