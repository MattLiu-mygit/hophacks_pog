import React, { useState } from 'react';
import Generator from '../Generator';
import model1 from '../heart.png';
import poppedHeart from '../blackHeart.png';
import hand from '../hand.png';
import poppedHand from '../poppedHand.png';

const GeneratorApp = () => {
  const [generatorNum, setGeneratorNum] = useState(0);
  return (
    <div>
      <button
      style = {{
        ...styles.generator, top: '80%',
      }}
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
      style = {{
        ...styles.generator, top: '70%',

      }}
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
    </div>
  );
};

const styles = {
  generator: {
    width: '5%',
    height: '4%',
    color: 'white',
    backgroundColor: 'rgba(255, 255, 0, 0.5)',
    marginLeft: '0rem',
    position: 'absolute',
  },
}

export default GeneratorApp;
