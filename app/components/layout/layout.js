import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'

import styles from './layout.module.scss';
import Navigation from '../navigation/nav';

const Header = ( ) => {
    return (
      <header className={ styles.heading }>
          <div className={ styles.title }>        
              <h3> reactFrameit </h3>   
          </div>
          <div className={ styles.extra }>
              <p> community </p>
          </div>
      </header>
    )
}

const Main = ( { children }) => {
    const router = useRouter()

    return (
      <div className={ styles.mainpage_body }>
            <div className={ styles.mp_crumbs } >
              <ul>
                <li onClick={() => router.back() }> back </li>
              </ul>
            </div>
            <aside className={ styles.mp_sidebar }>
                <div>

                </div>
            </aside>
            <main className={ styles.mp_page }>
                <Navigation />
                { children }
            </main>
      </div>
    )
}

export default function Layout( { children } ) {
  return (
    <div className={ styles.mainpage_container_flex }>
          <div className={ styles.mainpage_container }>
              <Head>
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <Header />
              <Main>
                  { children }
              </Main>
          </div>
    </div>
  )
}
