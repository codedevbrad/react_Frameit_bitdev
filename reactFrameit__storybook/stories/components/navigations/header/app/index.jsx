import react from 'react';
import { useMediaQuery } from 'react-responsive';
import ModalSingle from '../../../modals/modal/app/modal';

import './style.scss';

const BigScreen = ( ) => {
        return (
                <div className='desktop'>
                        <div className="x navigation">
                                <ul>
                                        <li> home    </li>
                                        <li> about   </li>
                                        <li> contact </li>
                                </ul>
                        </div>
                        <div className="x social">
                                user
                        </div>
                </div>
        )
}

const SmallScreen = ( ) => {
        
        return (
                <div className='mobile'>
                        <div className="x nav-mobile">
                                <ModalSingle type='right' isForm={ false } modalToggleTitle={ <p> toggle menu </p> } 
                                       navigationClass={ 'navigation_mobile' } theme='dark'>
                                        <ul> 
                                                <li> item 1 </li>
                                                <li> item 2 </li>
                                        </ul>
                                </ModalSingle>
                        </div>
                </div>
        )
}


const Header = ( ) => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });

    return (
        <div className='reactFrameit_header'>
                <div className="x title">
                        title
                </div>
                { isBigScreen ? <BigScreen /> : <SmallScreen /> }
        </div>
    )
}

export default Header;