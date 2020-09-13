import React, { useState, useEffect } from 'react';
import loading from './loading.gif';
import goldfish from './goldfish.jpg';

const ProgressBar = (props) => {
  const [progressDescription, setProgressDescription] = useState(false);
  return (
    <div
      style={{
        zIndex: '100000000',
        position: 'absolute',
        top: '15%',
        width: '100%',
        height: '100%',
        left: '2.5%',
      }}
    >
      <div
        style={{
          width: '25%',
          backgroundColor: 'rgba(165, 55, 253, 1)',
          borderRadius: '20px',
          height: '5%',
          marginLeft: '1rem',
        }}
        onMouseEnter={() => {
          setProgressDescription(true);
        }}
        onMouseLeave={() => {
          setProgressDescription(false);
        }}
      >
        {props.started ? (
          <div
            style={{
              width: `${(100 * (props.total - props.timeLeft)) / props.total}%`,
              borderRadius: '20px',
              height: '100%',
              position: 'relative',
              background:
                'linear-gradient(90deg, rgba(165, 55, 253, 1), rgba(27, 4, 124, 1))',
            }}
          ></div>
        ) : null}
        <img
          style={{
            position: 'absolute',
            // height: '200%',
            top: '-2.5%',
            left: '-1%',
            height: '10%',
            float: 'left',
          }}
          src={loading}
        />
        <div
          style={{
            position: 'absolute',
            left: '15%',
            top: '1.5%',
            color: 'white',
          }}
        >
          0:{props.timeLeft} <b>{props.song}</b>
        </div>
      </div>
      {progressDescription ? (
        <div
          style={{
            position: 'absolute',
            top: '3rem',
            //backgroundColor: 'rgba(165, 55, 253, .7)',
            color: 'white',
            background:
              'linear-gradient(90deg, rgba(27, 4, 124, 1), rgba(165, 55, 253, 1))',
            left: '2rem',
            padding: '0.75rem',
            borderRadius: '2px',
            width: '40%',
          }}
        >
          <img
            src={goldfish}
            style={{ float: 'left', width: '20%', marginRight: '1rem' }}
          />
          <p>Goldfish - Stemo ft. Richard Kim</p>
          <p>
            Stemo and Rick Kim team up for a song of lost love and self
            reflection.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ProgressBar;
