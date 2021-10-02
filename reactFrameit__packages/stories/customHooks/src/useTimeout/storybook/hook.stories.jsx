import React, { useState , useRef } from 'react';

import useTimeout from '../hook/index';

const OneSecondTimer = props => {
    const [seconds, setSeconds] = React.useState(0);
    useTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
  
    return <p>{seconds}</p>;
};

  
export default {
    title: 'Hooks/useTimeout' ,
    component: OneSecondTimer ,
    argTypes: { }
};

const Template = (args) => <OneSecondTimer {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    name: 'harry'
 };
