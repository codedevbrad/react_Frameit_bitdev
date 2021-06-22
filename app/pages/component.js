import Head from 'next/head';
import styles from '../styles/page.module.scss';
import packageStyles from '../styles/page_component.module.scss';
import { useRouter } from 'next/router';
import { useState , useEffect } from 'react';
import { component_data , getComponent } from '../json/component_data';

export default function Component() {

    const router = useRouter();

    const [ component , updateComponent ] = useState({});

    useEffect( async ( ) => {
        const { id } = router.query;
        try {
            let component_found = await getComponent( id );
            updateComponent( component_found );
        }
        catch ( err ) {

        }
    } , [ ] );

    return (
        <div className={ styles.page }>
            <h1> { component.name } </h1>
            <section className={ packageStyles.demoCode }>
                <h3> setup </h3>
                <code>
                    {`
                    import ${ component.name } from @codedevbrad/${ component.name };
                    `}
                </code>
            </section>
            <section className={ packageStyles.package }>

            </section>
        </div>
    )
}
