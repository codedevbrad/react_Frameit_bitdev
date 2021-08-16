import React from 'react';
import { Accordition } from '../@codedevbrad_react_frameit/index';

const AccorditionShowcase = ( ) => {
    return (
        <div className="eachComponent_showcase showcase_accordition">

            <section>
            <h3> accordition component </h3>
            <code>
              {
`
<Accordition title={ 'accord me baby' } containerClass={ accordition_class }>
    <p> some text goes here </p>
</Accordition>
`
              }
            </code>

            <Accordition containerClass={ 'accord_li' } tagname={ 'li' } title={ 'accord me baby' } >
                <p> some interesting stuff revealed. </p>
            </Accordition>

            </section>

            <section>
            <h3> accordition in Menu </h3>
            <code>
              {
`
<div className="accordition_menu">
    <ul>
        <li> element </li>
        <Accordition containerClass={ 'accord_li' } tagname={ 'li' } title={ 'accord me baby' } >
            <ul>
            <li> element inner 1 </li>
            <li> element inner 2 </li>
            <li> element inner 3 </li>
            </ul>
        </Accordition>
        <li> element 2 </li>
        <li> element 3 </li>
    </ul>
</div>
`
              }
            </code>
            <div className="accordition_menu">
                <ul>
                    <li> element </li>
                    <Accordition containerClass={ 'accord_li' } tagname={ 'li' } title={ 'accord me baby' } >
                        <ul>
                        <li> element inner 1 </li>
                        <li> element inner 2 </li>
                        <li> element inner 3 </li>
                        </ul>
                    </Accordition>
                    <li> element 2 </li>
                    <li> element 3 </li>
                </ul>
            </div>
            </section>


            <h3> to do </h3>
            <ul className="component_notes">
                <li> > </li>
            </ul>

        </div>
    )
}

export default AccorditionShowcase;
