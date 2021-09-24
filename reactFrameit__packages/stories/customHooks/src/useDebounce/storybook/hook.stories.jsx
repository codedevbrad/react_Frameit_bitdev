import { useState } from "react";
import useDebounce from "../hook/index";

function DebounceComponent( { delay } ) {
    const [count, setCount] = useState('');

    const sync = ( ) => {
      console.log(count)
    }

    useDebounce( sync , delay , [count] );

    return (
        <div>
            <input value={ count } onChange={ ( e ) => setCount(e.target.value ) } />
        </div>
    )
}

export default {
    title: 'Hooks/useDebounce' ,
    component: DebounceComponent ,
    argTypes: { }
};

const Template = (args) => <DebounceComponent {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    delay: 3000
};
