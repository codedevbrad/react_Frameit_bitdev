import useStateTimeout from "../hook/index";

function TimeoutComponent( { wait = 1000 } ) {

    const func = ( value ) => {
        console.log(`update ${ value } after 1 second.`)
    }

    let [ value , setValue ] = useStateTimeout({
        initialValue: 'hey' , returnFunc: func , timeout: wait 
    });
 
    return (
        <div>
            <input type='text' value={value} onChange={ ( e ) => setValue(e.target.value) } />
        </div>
    );
}

export default TimeoutComponent;