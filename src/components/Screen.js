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
    <div>
      <div style = {{
        width: '100%',
        height: '11%',
        background: 'linear-gradient(rgba(165, 55, 253, 1), rgba(165, 55, 253, 0))',
        position: 'absolute',
        top: '0%',
        left: '0%'
        }}>
      </div>
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
          height: '8%',
          color: 'white',
          backgroundColor: 'rgba(255, 255, 0, 0.5)',
          marginLeft: '0rem',
          position: 'absolute',
          top: '78%',
          zIndex: '9999999',
        }}
      >
        strobe
      </button>
      <ProgressApp />
      <div style = {{
      width: '100%',
      height: '11%',
      background: 'linear-gradient(rgba(165, 55, 253, 0), rgba(165, 55, 253, 1))',
      position: 'absolute',
      bottom: '0%',
      left: '0%'
      }}></div>
    </div>
  );
};

export default Screen;
