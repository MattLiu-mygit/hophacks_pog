import React, { useState, useEffect } from 'react';
import Dashboard from './interactives/Dashboard';
import Strobelight from './interactives/Strobelight';
import GeneratorApp from './interactives/generator/GeneratorApp';
import ProgressApp from './interactives/ProgressApp';
//import mp3Duration from 'mp3-duration';

const Screen = () => {
  const [nightMode, setNightMode] = useState(false);
  const [strobe, setStrobe] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <div>
        <GeneratorApp />
      </div>
      <Dashboard
        setNightMode={setNightMode}
        setStrobe={setStrobe}
        strobe={strobe}
      />
      {strobe ? <Strobelight strobe={strobe} /> : null}

      <button
        onClick={() => {
          setStrobe(!strobe);
        }}
        style={{
          width: '5%',
          height: '5%',
          color: 'white',
          backgroundColor: 'rgba(50, 18, 122, 0.5)',
          marginLeft: '0rem',
          position: 'absolute',
          top: '78%',
          zIndex: '9999999',
          borderRadius: '12px',
          borderColor: '#ff0090',
        }}
      >
        strobe
      </button>
      <ProgressApp />
    </div>
  );
};

export default Screen;
