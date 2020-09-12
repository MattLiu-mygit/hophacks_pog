import React, { useState, useEffect } from 'react';
import Dashboard from './interactives/Dashboard';
import Strobelight from './interactives/Strobelight';
import GeneratorApp from './interactives/generator/GeneratorApp';
//import mp3Duration from 'mp3-duration';

const Screen = () => {
  const [nightMode, setNightMode] = useState(false);
  const [strobe, setStrobe] = useState(false);

  return (
    <div>
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
        styles={{
          width: '5%',
          height: '4%',
          color: 'white',
          backgroundColor: 'rgba(255, 255, 0, 0.5)',
          marginLeft: '0rem',
          position: 'absolute',
        }}
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
        }}
      >
        strobe
      </button>
      {/* {sound ? (
        <>
          <Sound
            url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            playStatus={Sound.status.PLAYING}
            // onLoading={handleSongLoading}
            // onPlaying={handleSongPlaying}
            // onFinishedPlaying={handleSongFinishedPlaying}
          />
        </>
      ) : null} */}
    </div>
  );
};

export default Screen;
