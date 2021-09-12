import React , { useEffect , useState } from 'react';

/* completed */
import DropdownRender from '../components/dropdown/stage/render';
/* progress */


import './css/App.css';

const Hover = ( ) => {
    return (
      <div> hover </div>
    )
}

const Components = {
    Dropdown: { 
      Component: DropdownRender 
    } , 
    Hover: { 
      Component: Hover 
    }
}

function Component ( { c_state } ) {
    let State = Components[ c_state ].Component;
    return (
        <State />
    )
}

function App() {

  const [ state , updateState ] = useState([]);

  useEffect( ( ) => {
      let components_array = Object.keys( Components );
      updateState( components_array );
      console.log('hey');
  } , [ ] );

  return (
    <main>
        <ul>
           { state.map( ( component , _index ) => 
              <li key={ _index } onClick={ ( ) => updateState( component ) } > { component } </li>
           )}
        </ul>
        <Component c_state={ state } />
    </main>
  );
}

export default App;
