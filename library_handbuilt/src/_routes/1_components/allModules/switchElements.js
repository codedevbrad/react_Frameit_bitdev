import React , { useContext , useEffect , useState } from 'react';
import { Dropdown , SwitchElements } from '../@codedevbrad_react_frameit/index';

const fakeStyle = {
  width: '100%' , height: '150px' , color: 'black',
  background: '#f2f2f2' , display: 'flex' ,
  alignItems: 'center' , justifyContent: 'center'
}

const Game = ( ) => { return ( <div  style={ fakeStyle  } > game component </div>  ) }
const Dashboard = ( ) => { return ( <div  style={ fakeStyle }> dashboard component </div> ) }

const SWitchElementsShowcase = ( ) => {

    const [ switchValue , changeSwitch ] = useState( 0 );

    return (
      <div className="eachComponent_showcase showcase_switchElements">
            <h3> switchElements components </h3>
            <code>
              {
`
const [ switchValue , changeSwitch ] = useState( 0 );

const Game = ( ) => { return ( <div  style={ fakeStyle  } > game component </div>  ) }
const Dashboard = ( ) => { return ( <div  style={ fakeStyle }> dashboard component </div> ) }

<SwitchElements toShow={ switchValue } options={ [
    <Game /> ,
    <Dashboard />
] } />
`
              }
            </code>

            <section>

              <Dropdown dropdownText={ 'dropdown title' } dropdownButton={ <i className='fas fa-sort-down'> </i> }
                           direction={ 'left' } style_override={ 'dropdown__1' }>
                   <li onClick={ () => changeSwitch(0) }> game element      </li>
                   <li onClick={ () => changeSwitch(1) }> dashboard element </li>
              </Dropdown>
              <SwitchElements toShow={ switchValue } options={ [
                  <Game /> ,
                  <Dashboard />
              ] } />

            </section>
      </div>
    )
}


export default SWitchElementsShowcase;
