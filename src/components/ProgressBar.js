import React, { useState, useEffect } from 'react';
import loading from './loading.gif';

const ProgressBar = (props) => {
  // const [upPercent, setUpPercent] = useState(0);
  // const [upPercentChanged, setUpPercentChanged] = useState(props.timeLeft);
  // useEffect(() => {
  //   setUpPercent((props.total - props.timeLeft) / props.total);
  // }, [props.timeLeft, upPercent]);
  return (
    <div
      style={{
        width: '25%',
        backgroundColor: 'green',
        height: '5%',
        position: 'absolute',
        marginLeft: '1rem',
      }}
    >
      {props.started ? (
        <div
          style={{
            width: `${(100 * (props.total - props.timeLeft)) / props.total}%`,
            backgroundColor: 'red',
            height: '100%',
            position: 'relative',
          }}
        ></div>
      ) : null}
      <img
        style={{
          position: 'absolute',
          height: '200%',
          top: '-50%',
          left: '-10%',
        }}
        src={loading}
      />
      <div style={{ position: 'absolute', left: '50%', top: '25%' }}>
        {props.timeLeft} <b>{props.song}</b>
      </div>
    </div>
  );
};

export default ProgressBar;
