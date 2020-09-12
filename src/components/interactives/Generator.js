import React, { useState, useEffect } from 'react';
import BreakableElement from './BreakableElement';

const Generator = (props) => {
  const [heartsArray, setHeartsArray] = useState([]);
  const [count, setCount] = useState(0);
  const [generateNew, setGenerateNew] = useState(true);

  useEffect(() => {
    if (count <= 1 && generateNew) {
      setTimeout(() => {
        console.log('generating');
        setGenerateNew(false);
        setHeartsArray([...heartsArray, count + 1]);
        setCount(count + 1);
      }, 1500);
    }
  }, [count, generateNew]);

  const removeHeart = (id) => {
    console.log('removing heart', generateNew);
    setCount(count - 1);
    heartsArray.filter((entry) => entry !== id);
  };

  return (
    <div
      style={{
        width: '100%',
        position: 'absolute',
        //top: '90%',
        height: '100%',
        backgroundColor: 'transparent',
      }}
    >
      {heartsArray.map((entry) => (
        <div
          style={{
            position: 'absolute',
            left: ` ${Math.random() * 100}% `,
            height: '90%',
            zIndex: '99999',
          }}
        >
          <BreakableElement
            setGenerateNew={setGenerateNew}
            key={entry.id}
            heartId={entry}
            removeHeart={removeHeart}
            left={Math.random() * 100}
            image={props.pic}
            popped={props.popped}
          />
        </div>
      ))}
    </div>
  );
};

export default Generator;
