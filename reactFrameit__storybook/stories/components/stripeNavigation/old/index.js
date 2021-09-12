import React , { useState , useRef } from 'react';

import './style.scss';

const StripeNavigationLink = ( { element , topLevelClass , updateTopElement , callFollowToRender } ) => {

    const [ stateOfLink , setStateOfLink ] = useState( false );
    const content_ref = useRef( null );

    const triggerLeave = ( ) => {
          callFollowToRender( false );
    }

    const triggerHover = ( ) => {
          if ( element.subLinks === false ) {
            callFollowToRender( false );
          }
          else {
            let { x , y , width , height } = content_ref.current.getBoundingClientRect();
            updateTopElement( x , y , width , height );
          }
    }

    return (
      <li className="navigationAnimated_dropdown" onMouseEnter={ (e) => triggerHover( e ) } onMouseLeave={ () => triggerLeave() }>
          <span className={`navigationAnimated_topLink ${ topLevelClass } `}> { element.topLevel  }</span>
          { element.subLinks != null &&
            <ul className={ `navigationAnimated_content `} ref={ content_ref }>
                { element.subLinks }
            </ul>
          }
      </li>
    )
}

const StripeNavigation = ( { children , elements , topLevelClass } ) => {
     const contain_el = useRef( null );
     const follow_el  = useRef( null );

     const [ renderFollow , setFollowRender ] = useState( false );
     const [ initialState , setInitialState ] = useState( true );

     const decideRenderForFollower = ( stateFromChild ) => {
          setFollowRender( stateFromChild );
          setInitialState( true );
     }

     const move_follow_toPos = ( x , y , width , height ) => {

          setFollowRender( true );
          if ( initialState ) {   setInitialState( false ) }
          else { follow_el.current.style.transition = 'all 400ms'; }

          follow_el.current.style.top   = y + 20 + 'px';
          follow_el.current.style.left  = x + 'px';
          follow_el.current.style.width = width + 'px';
          follow_el.current.style.height = height + 'px';
     }

     return (
          <div className="navigationAnimated_container" ref={ contain_el }>
              <div className={ `navigationAnimated_follow ${ renderFollow ? 'navigationAnimated_follow-show' :''} `} ref={ follow_el } > </div>

              <nav className="navigationAnimated_main">
                  <ul>
                      { elements.map( ( element , index ) =>
                            <StripeNavigationLink element={ element } key={ index } topLevelClass={ topLevelClass }
                                                  updateTopElement={ move_follow_toPos } callFollowToRender={ decideRenderForFollower  }/>
                      )}

                  </ul>
              </nav>
         </div>
     )
}

export default StripeNavigation;
