import React, { useState } from 'react';
import Generator from './Generator';
import model1 from './heart.png';
import poppedHeart from './blackHeart.png';
import hand from './hand.png';
import poppedHand from './poppedHand.png';

const GeneratorApp = () => {
  const [generatorNum, setGeneratorNum] = useState(0);
  return (
    <div>
      <img
        src={model1}
        style={{
          ...styles.generator,
          top: '58%',
        }}
      />
      <button
        style={{
          ...styles.generator,
          top: '58%',
        }}
        onClick={() => {
          if (generatorNum != 1) {
            setGeneratorNum(1);
          } else {
            setGeneratorNum(0);
          }
        }}
      ></button>

      <button
        style={{
          ...styles.generator,
          top: '68%',
        }}
        onClick={() => {
          if (generatorNum != 2) {
            setGeneratorNum(2);
          } else {
            setGeneratorNum(0);
          }
        }}
      >
        <img src={poppedHand} style={{ width: '100%' }} />
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
    </div>
  );
};

const styles = {
  generator: {
    width: '5%',
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
