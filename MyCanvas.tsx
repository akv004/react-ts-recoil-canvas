import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { textInputState } from './atoms';

export const MyCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [textInput, setTextInput] = useRecoilState(textInputState);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Render the text input field on the canvas
    ctx.font = '16px sans-serif';
    ctx.fillText(textInput, 10, 30);

    // Add an event listener to handle user input
    canvas.addEventListener('click', (event) => {
      const x = event.offsetX;
      const y = event.offsetY;
      if (x > 10 && x < 10 + ctx.measureText(textInput).width && y > 10 && y < 30) {
        // The user clicked on the text input field, so enable input mode
        canvas.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            // The user pressed Enter, so disable input mode and update the text input value
            setTextInput(event.target.value);
            canvas.removeEventListener('keydown', event.listener);
          }
        });
        canvas.focus();
      }
    });
  }, [textInput, setTextInput]);

  return (
    <canvas ref={canvasRef} width={400} height={400} />
  );
};


