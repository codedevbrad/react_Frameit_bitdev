
import useStateParentChange from '../hook/index';

const UseHook = ( { name } ) => {

    let [ state , update ] = useStateParentChange( name );

    return (
        <div className="useHook">
                { state }
                <input value={ state } onChange={ ( e ) => update( e.target.value ) } />
        </div>
    )
}

export default UseHook;