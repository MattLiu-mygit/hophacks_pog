import React, { useState, useEffect } from 'react';
import Dashboard from './interactives/Dashboard';
import Strobelight from './interactives/Strobelight';
import GeneratorApp from './interactives/generator/GeneratorApp';
import ProgressApp from './interactives/ProgressApp';
import strobelight from './Strobe.png';
//import mp3Duration from 'mp3-duration';

const Screen = () => {
  const [nightMode, setNightMode] = useState(false);
  const [strobe, setStrobe] = useState(false);
  const [width, setWidth] = useState(5);

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '25%',
          backgroundImage:
            'linear-gradient(to bottom, rgba(165, 55, 253, 1), rgba(0, 0, 0, 0))',
          position: 'absolute',
          top: '0%',
          left: '0%',
        }}
      ></div>
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
            setWidth(4);
            setTimeout(() => {
              setWidth(5);
            }, 100);
          }}
          style={{
            width: `${width}%`,
            height: '5%',
            color: 'white',
            //backgroundColor: 'rgba(50, 18, 122, 0.5)',
            marginLeft: '0rem',
            position: 'absolute',
            top: '78%',
            zIndex: '99999999999',
            //borderRadius: '12px',
            //borderColor: '#ff0090',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
          }}
        >
          <img
            src={strobelight}
            style={{
              zIndex: '9999999',
              width: '100%',
            }}
          />
        </button>
        <ProgressApp />
      </div>
      <div
        style={{
          width: '100%',
          height: '25%',
          background:
            'linear-gradient(rgba(165, 55, 253, 0), rgba(165, 55, 253, 1))',
          position: 'absolute',
          bottom: '0%',
          left: '0%',
        }}
      ></div>
    </div>
  );
};

export default Screen;
