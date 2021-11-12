import useScrollTimeout from "../hook/index";

function ScrollDelayComponent( { delay = 1000 } ) {

    const func = ( ) => console.log('ended scroll');

    useScrollTimeout( { func: func , delay } );
 
    return (
        <div style={ { height: '2000px' }}>
            hey
        </div>
    );
}

export default ScrollDelayComponent;