import React , { useEffect , useState , useContext } from 'react';
import { ModuleContext } from '../../_contexts/moduleContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerToggle = ( { container , className } ) => {

      let Tag = container || 'div';

      const { currentLayoutIsLarge , setCurrentLayout } = useContext( ModuleContext );

      const toggleAppLayout = ( ) => {
          setCurrentLayout( !currentLayoutIsLarge );
      }

      return (
          <Tag className={ className } onClick={ ( ) => toggleAppLayout() } >
              <FontAwesomeIcon icon={ faBars } />
          </Tag>
      )
}

export default HamburgerToggle;
