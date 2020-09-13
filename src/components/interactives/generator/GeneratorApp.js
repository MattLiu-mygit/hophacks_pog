import React, { useState } from 'react';
import Generator from './Generator';
import model1 from './heart.png';
import poppedHeart from './blackHeart.png';
import hand from './hand.png';
import poppedHand from './poppedHand.png';
import flames from './Fire.gif';
import purple from './purple.png';

const GeneratorApp = () => {
  const [generatorNum, setGeneratorNum] = useState(0);
  const [width1, setWidth1] = useState(5);
  const [width2, setWidth2] = useState(5);
  return (
    <div>
      <button
        style={{
          ...styles.generator,
          top: '58%',
          width: `${width1}%`,
        }}
        onClick={() => {
          setWidth1(4);
          if (generatorNum != 1) {
            setGeneratorNum(1);
          } else {
            setGeneratorNum(0);
          }
          setTimeout(() => {
            setWidth1(5);
          }, 100);
        }}
      >
        <img src={model1} style={{ width: '100%', opacity: '85%' }} />
      </button>

      <button
        style={{
          ...styles.generator,
          top: '68%',
          width: `${width2}%`,
        }}
        onClick={() => {
          setWidth2(4);
          if (generatorNum != 2) {
            setGeneratorNum(2);
          } else {
            setGeneratorNum(0);
          }
          setTimeout(() => {
            setWidth2(5);
          }, 100);
        }}
      >
        <img src={purple} style={{ width: '100%', opacity: '85%' }} />
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
          <Generator pic={purple} popped={poppedHand} />
          <Generator pic={flames} popped={hand} />
          <Generator pic={hand} popped={poppedHand} />
          <Generator pic={poppedHand} popped={hand} />
          <Generator pic={flames} popped={hand} />
        </>
      ) : null}
    </div>
  );
};

const styles = {
  generator: {
    height: '8%',
    color: 'white',
    backgroundColor: 'transparent',
    marginLeft: '0rem',
    position: 'absolute',
    border: 'none',
    outline: 'none',
    zIndex: '99999999',
  },
};

export default GeneratorApp;
