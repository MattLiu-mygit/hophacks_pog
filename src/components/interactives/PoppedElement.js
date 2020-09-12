import React, { useEffect } from 'react';

const PoppedHeart = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.removeHeart(props.heartId);
    }, 1000);
  }, []);
  return (
    <div>
      <img
        src={props.popped}
        style={{
          width: '5vw',
        }}
      />
    </div>
  );
};

export default PoppedHeart;
