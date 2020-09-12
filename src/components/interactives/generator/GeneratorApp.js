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
    </div>
  );
};

export default GeneratorApp;
