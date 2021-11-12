import React from 'react';
import useTimeout from '../hook/index';

const OneSecondTimer = (  ) => {
    const [seconds, setSeconds] = React.useState(0);
    useTimeout(() => {
      setSeconds(seconds + 1);
    }, 3000 );
  
    return <p>{seconds}</p>;
};

export default OneSecondTimer;