import React, { Fragment , useRef } from 'react';

import './module_styling.scss';

const Accordion = ({ title, content }) => {

    const elementRef = useRef( null );

    const onToggle = ( ) => {
        let panel = elementRef.current;

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    return (
        <Fragment>
            <button class="accordion" onClick={ ( ) => onToggle() }> { title } </button>
            <div class="panel" ref={ elementRef }>
                  <div>
                        { content }
                  </div>
            </div>
        </Fragment>
    );
};
const Accordition = ( { data } ) => {

  return (
    <div className="accordion-container">
        { data.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
    </div>
  );
};

export default Accordition;
