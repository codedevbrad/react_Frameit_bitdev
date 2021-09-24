import React from 'react';
import './style.scss';

const Marquee = ( { children , speed } ) => {
    return (
        <div className={`reactFrameit_marquee`}>
                <span className={ `rF_m_span rF_m_span_marquee__${ speed }`}>
                        { children }
                </span>
        </div>
    )
}

export default Marquee;