import React, { useState, useEffect } from 'react';
import cloud from './cloud.gif';

const Strobelight = (props) => {
  const [strobe, setStrobe] = useState(true);
  const [angle, setAngle] = useState(45);
  const [left, setLeft] = useState(false);

  useEffect(() => {
    if (strobe) {
      if ((angle > 0) & left) {
        setTimeout(() => {
          setAngle(angle - 15);
          setStrobe(false);
        }, 500);
        setLeft(true);
      } else {
        setLeft(false);
        setTimeout(() => {
          setAngle(angle + 15);
          setStrobe(false);
        }, 500);
      }
    } else {
      setTimeout(() => {
        setStrobe(true);
      }, 500);
    }
  }, [angle, strobe]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
        top: '0%',
        left: '0%',
      }}
    >
      Hello
      <img
        src={cloud}
        style={{
          opacity: '15%',
          width: '100%',
          height: '30%',
          position: 'absolute',
          bottom: '10%',
        }}
      />
      <img
        src={cloud}
        style={{
          opacity: '15%',
          width: '40%',
          height: '30%',
          position: 'absolute',
          bottom: '10%',
          right: '0%',
        }}
      />
      {strobe ? (
        <>
          <div
            style={{
              backgroundColor: 'white',
              height: '300%',
              width: '2.5%',
              transform: `rotate(${angle}deg)`,
              position: 'absolute',
              left: '25%',
              opacity: '20%',
              bottom: '-150%',
            }}
          ></div>
          <div
            style={{
              backgroundColor: 'blue',
              height: '300%',
              width: '2.5%',
              transform: `rotate(${angle + 15}+15deg)`,
              position: 'absolute',
              left: '25%',
              opacity: '70%',
              bottom: '-150%',
            }}
          ></div>
          <div
            style={{
              backgroundColor: 'red',
              height: '300%',
              width: '2.5%',
              transform: `rotate(-${angle + 15}deg)`,
              position: 'absolute',
              right: '25%',
              opacity: '50%',
              bottom: '-150%',
            }}
          ></div>
          <div
            style={{
              backgroundColor: 'white',
              height: '300%',
              width: '2.5%',
              transform: `rotate(-${angle}deg)`,
              position: 'absolute',
              right: '25%',
              opacity: '90%',
              bottom: '-150%',
            }}
          ></div>
        </>
      ) : null}
    </div>
  );
};

export default Strobelight;
