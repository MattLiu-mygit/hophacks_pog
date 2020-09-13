import React, { useState, useEffect } from 'react';
import PoppedElement from './PoppedElement';

const heartStyles = {
  heart: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'none',
    position: 'absolute',
    color: 'pink',
    display: 'inline-block',
    textAlign: 'center',
    padding: '0rem',
    width: '5vw',
    outline: 'none',
  },
};

const BreakableElement = (props) => {
  const [popped, setPopped] = useState(false);
  const [height, setHeight] = useState(80);
  const [removed, setRemoved] = useState(false);
  const [velocity, setVelocity] = useState((Math.random() * 1.5 + 98) / 100);

  useEffect(() => {
    if (popped) {
      setTimeout(() => {
        console.log('generating new');
        props.setGenerateNew(true);
        setRemoved(true);
      }, 1000);
    }
    if (!popped) {
      setTimeout(() => {
        setHeight(velocity * height);
      }, 10);
    }
    if (height <= 10) {
      // setTimeout(() => {
      //   console.log('generating new');
      //   props.setGenerateNew(true);
      //   //setRemoved(true);
      // }, 1000);

      setPopped(true);
    }
  }, [height, popped]);

  return (
    <>
      {!popped && !removed ? (
        <button
          onClick={() => {
            setPopped(true);
          }}
          style={{
            ...heartStyles.heart,
            top: `${height}%`,
            opacity: '85%',
          }}
        >
          <img
            src={props.image}
            style={{
              width: '3vw',
            }}
          />
        </button>
      ) : !removed && popped ? (
        <div
          style={{
            ...heartStyles.heart,
            top: `${height}%`,
          }}
        >
          <PoppedElement
            removeHeart={props.removeHeart}
            popped={props.popped}
          />
        </div>
      ) : null}
    </>
  );
};

export default BreakableElement;
