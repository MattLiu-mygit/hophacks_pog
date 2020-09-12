import React, { useState, useEffect } from 'react';
import Dashboard from './interactives/Dashboard';
import Strobelight from './interactives/Strobelight';
import Sound from 'react-sound';
import ProgressBar from './ProgressBar';
import GeneratorApp from './interactives/generator/GeneratorApp';
//import mp3Duration from 'mp3-duration';

const Screen = () => {
  const [nightMode, setNightMode] = useState(false);
  const [strobe, setStrobe] = useState(false);
  const [sound, setSound] = useState(false);
  const [started, setStarted] = useState(372);
  const [total, setTotal] = useState(372);
  const [playing, setPlaying] = useState('Old McDonald');

  useEffect(() => {
    if (started > 0 && sound) {
      setTimeout(() => {
        setStarted(started - 1);
      }, 1000);
    } else if (!sound) {
      setStarted(372);
    }
  }, [started, sound]);

  return (
    <div>
      {sound ? (
        <ProgressBar
          started={sound}
          timeLeft={started}
          total={total}
          song={playing}
        />
      ) : null}
      <GeneratorApp />
      <Dashboard
        setNightMode={setNightMode}
        setStrobe={setStrobe}
        strobe={strobe}
      />
      {strobe ? <Strobelight strobe={strobe} /> : null}
      <button
        onClick={() => {
          setSound(!sound);
        }}
        style={{ position: 'absolute', bottom: '0%' }}
      >
        Open sound
      </button>
      <button
      styles = {{
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
        height: '4%',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 0, 0.5)',
        marginLeft: '0rem',
        position: 'absolute',
        top: '60%' }}
      >
        strobe
      </button>
      {sound ? (
        <>
          <Sound
            url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            playStatus={Sound.status.PLAYING}
            // onLoading={handleSongLoading}
            // onPlaying={handleSongPlaying}
            // onFinishedPlaying={handleSongFinishedPlaying}
          />
        </>
      ) : null}
    </div>
  );
};

export default Screen;
