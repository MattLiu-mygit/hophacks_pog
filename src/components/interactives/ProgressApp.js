import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import bars from './BarGraph.png';

const ProgressApp = () => {
  const [started, setStarted] = useState(30);
  const total = 30;
  const [playing, setPlaying] = useState('Goldfish');
  const [sound, setSound] = useState(false);

  useEffect(() => {
    if (started > 0 && sound) {
      setTimeout(() => {
        setStarted(started - 1);
      }, 1000);
    }
    if (!sound) {
      setStarted(30);
    }
  }, [started, sound]);
  useEffect(() => {
    createVisualization();
  }, [sound]);

  const createVisualization = () => {
    if (sound) {
      let context = new AudioContext();
      let analyser = context.createAnalyser();
      let canvas = document.getElementById('analyzer');
      let ctx = canvas.getContext('2d');
      let audio = document.getElementById('audio');
      audio.volume = 0.5;
      console.log(audio);
      audio.crossOrigin = 'anonymous';
      let audioSrc = context.createMediaElementSource(audio);
      audioSrc.connect(analyser);
      audioSrc.connect(context.destination);
      analyser.connect(context.destination);

      function renderFrame() {
        let freqData = new Uint8Array(analyser.frequencyBinCount);
        requestAnimationFrame(renderFrame);
        analyser.getByteFrequencyData(freqData);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log(freqData);
        ctx.fillStyle = '#9933ff';
        let bars = 100;
        for (var i = 0; i < bars; i++) {
          let bar_x = i * 3;
          let bar_width = 2;
          let bar_height = -(freqData[i] / 2);
          ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
        }
      }
      renderFrame();
    }
  };
  return (
    <>
      {sound ? (
        <div>
          <audio
            id="audio"
            autoPlay={true}
            //this is the link to my song url feel free to use it or replace it with your own
            src={
              'https://p.scdn.co/mp3-preview/51495550f9326b6f340315f55bd1b512c516f610?cid=774b29d4f13844c495f206cafdad9c86'
            }
            type="audio/mp3"
          ></audio>
          <canvas
            id="analyzer"
            style={{
              width: '100%',
              height: '50%',
              position: 'absolute',
              bottom: '0%',
              opacity: '60%',
              left: '0%',
            }}
          ></canvas>
        </div>
      ) : null}
      {sound ? (
        <div>
          <ProgressBar
            started={sound}
            timeLeft={started}
            total={total}
            song={playing}
          />
        </div>
      ) : null}
      <button
        onClick={() => {
          setSound(!sound);
        }}
        style={{
          position: 'absolute',
          bottom: '0%',
          zIndex: '1000000000',
          backgroundColor: 'transparent',
          height: '15%',
          border: 'none',
          outline: 'none',
        }}
      >
        <img src={bars} />
      </button>
    </>
  );
};

export default ProgressApp;
