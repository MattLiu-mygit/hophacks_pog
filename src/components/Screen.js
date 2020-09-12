import React, { useState, useEffect } from 'react';
import Dashboard from './interactives/Dashboard';
import Strobelight from './interactives/Strobelight';
import Sound from 'react-sound';
import ProgressBar from './ProgressBar';
import Generator from './interactives/Generator';
import model1 from './interactives/heart.png';
import poppedHeart from './interactives/blackHeart.png';
import hand from './interactives/hand.png';
import poppedHand from './interactives/poppedHand.png';
//import mp3Duration from 'mp3-duration';

const Screen = () => {
  const [nightMode, setNightMode] = useState(false);
  const [strobe, setStrobe] = useState(false);
  const [sound, setSound] = useState(false);
  const [started, setStarted] = useState(372);
  const [total, setTotal] = useState(372);
  const [playing, setPlaying] = useState('Old McDonald');
  const [generatorNum, setGeneratorNum] = useState(0);

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
      <button
        onClick={() => {
          if (generatorNum != 1) {
            setGeneratorNum(1);
          } else {
            setGeneratorNum(0);
          }
        }}
      >
        generate heart
      </button>
      <button
        onClick={() => {
          if (generatorNum != 2) {
            setGeneratorNum(2);
          } else {
            setGeneratorNum(0);
          }
        }}
      >
        generate hand
      </button>
      {generatorNum === 1 ? (
        <>
          <Generator pic={model1} popped={poppedHeart} />
          <Generator pic={model1} popped={poppedHeart} />
          <Generator pic={model1} popped={poppedHeart} />
          <Generator pic={model1} popped={poppedHeart} />
          <Generator pic={model1} popped={poppedHeart} />
        </>
      ) : generatorNum === 2 ? (
        <>
          <Generator pic={hand} popped={poppedHand} />
          <Generator pic={hand} popped={poppedHand} />
          <Generator pic={hand} popped={poppedHand} />
          <Generator pic={hand} popped={poppedHand} />
          <Generator pic={hand} popped={poppedHand} />
        </>
      ) : null}
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
        onClick={() => {
          setStrobe(!strobe);
        }}
        style={{ position: 'absolute', top: '50%' }}
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
