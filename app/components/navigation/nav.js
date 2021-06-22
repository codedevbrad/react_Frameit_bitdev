import Head from 'next/head';
import styles from './nav.module.scss';
import ActiveLink from '../../helpers/activeLink';

const Navigation = ( ) => {
    return (
      <nav className={ styles.navigation_sub }>
          <ul>
                <li> 
                  <ActiveLink href='/components' >
                      <a> Components </a>
                   </ActiveLink> 
                </li>
                <li> 
                  <ActiveLink href='/hooks' >
                      <a> Usehooks </a>
                  </ActiveLink>   
                </li>
                <li>
                  <ActiveLink href='/npm' >
                      <a> Npm modules </a>
                  </ActiveLink> 
                </li>
          </ul>
      </nav>
    )
}

export default Navigation;