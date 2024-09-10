import React, { useState, useEffect } from 'react';

function AnimatedText() {
  const [text, setText] = useState('Hello, world!');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => {
        const lastChar = prevText.slice(-1);
        const restOfText = prevText.slice(0, -1);
        return lastChar + restOfText;
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="animated-text" style={{fontSize: "4rem"}}>
      {text}
    </div>
  );
}

export default AnimatedText;