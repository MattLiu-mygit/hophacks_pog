import React, { useState, useEffect } from 'react';
import loading from './loading.gif';

const ProgressBar = (props) => {
  const [progressDescription, setProgressDescription] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setProgressDescription(true);
      }}
      onMouseLeave={() => {
        setProgressDescription(false);
      }}
    >
      <div
        style={{
          width: '25%',
          backgroundColor: 'rgba(165, 55, 253, 1)',
          borderRadius: "20px",
          height: '5%',
          position: 'absolute',
          marginLeft: '1rem',
        }}
      >
        {props.started ? (
          <div
            style={{
              width: `${(100 * (props.total - props.timeLeft)) / props.total}%`,
              borderRadius: "20px",
              height: '100%',
              position: 'relative',
              background: 'linear-gradient(90deg, rgba(165, 55, 253, 1), rgba(27, 4, 124, 1))',
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
        <div style={{ position: 'absolute', left: '50%', top: '25%', color: 'white', }}>
          {props.timeLeft} <b>{props.song}</b>
        </div>
      </div>
      {progressDescription ? (
        <div
          style={{
            position: 'absolute',
            top: '5rem',
            backgroundColor: 'red',
          }}
        >
          BAKJSFLASKDH
        </div>
      ) : null}
    </div>
  );
};

export default ProgressBar;
