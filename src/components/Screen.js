import React, { useState } from 'react';
import Dashboard from './interactives/Dashboard';
import Strobelight from './interactives/Strobelight';

const Screen = () => {
  const [nightMode, setNightMode] = useState(false);
  const [strobe, setStrobe] = useState(false);
  return (
    <div>
      <Dashboard
        setNightMode={setNightMode}
        setStrobe={setStrobe}
        strobe={strobe}
      />
      {strobe ? <Strobelight strobe={strobe} /> : null}
    </div>
  );
};

export default Screen;
