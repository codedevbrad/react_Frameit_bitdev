
import React , { useContext , useEffect , useState } from 'react';
import { Tooltip } from '../@codedevbrad_react_frameit/index';

const TooltipShowcase = ( ) => {
    return (
        <div className="eachComponent_showcase showcase_tooltip">

                <section>
                    <h3> tootlip right </h3>
                    <code>
  {
  `<Tooltip tagName={ 'div' } className={ 'hoverable'} position={ 'right' } tip={ 'need help?' }>
     <h3 id="tip-large"> hover over right </h3>
  </Tooltip>`
  }
                    </code>
                    <Tooltip tagName={ 'div' } className={ 'hoverable'} position={ 'right' } tip={ 'need help?' }>
                       <h3 id="tip-large"> hover </h3>
                    </Tooltip>
                </section>

                  <section>
                  <h3> tootlip top </h3>
                  <code>
  {
  `<Tooltip tagName={ 'div' } className={ 'hoverable'} position={ 'top' } tip={ 'need help?' }>
  <h3 id="tip-large"> hover over right </h3>
  </Tooltip>`
  }
                  </code>
                  <Tooltip tagName={ 'div' } className={ 'hoverable'} position={ 'top' } tip={ 'need help?' }>
                     <h3 id="tip-large"> hover </h3>
                  </Tooltip>
                </section>
                <section>
                  <h3> tootlip bottom </h3>
                  <code>
    {
    `<Tooltip tagName={ 'div' } className={ 'hoverable'} position={ 'bottom' } tip={ 'need help?' }>
    <h3 id="tip-large"> hover over right </h3>
    </Tooltip>`
    }
                  </code>
                  <Tooltip tagName={ 'div' } className={ 'hoverable'} position={ 'bottom' } tip={ 'need help?' }>
                     <h3 id="tip-large"> hover </h3>
                  </Tooltip>
              </section>
        </div>
    )
}

export default TooltipShowcase;
