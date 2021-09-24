
import { useEffect , useState } from "react";

const useStateParentChange = ( stateChange ) => {
    const [ state , update ] = useState( false );

    useEffect( ( ) => {
            update( stateChange );
    } , [ stateChange ] );

    return [ state , update ];
}

export default useStateParentChange;