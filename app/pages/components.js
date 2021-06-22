import Head from 'next/head';
import Link from 'next/link';
import { component_data } from '../json/component_data';

import styles from '../styles/page.module.scss';
import componentStyles from '../styles/page_components.module.scss';

export default function Components() {
    return (
        <div className={ styles.page }>
            <div className={ componentStyles.page_components }>
                { component_data.map( ( component , index ) => 
                    <div className={ componentStyles.components }> 
                        <Link href={ component.link }> 
                            <a> { component.name } </a> 
                        </Link>
                        <p> { component.description } </p>
                    </div>
                )}
            </div>
        </div>
    )
}
