import multRequest from '@/util/multplyRequest';
import React, { useEffect } from 'react';
export default function signatureBoard() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.addEventListener('mousemove', (e) => {
      const { offsetX, offsetY } = e;
      ctx.lineTo(offsetX, offsetY);
    });

    canvas.addEventListener('mousedown', (e) => {
      const { offsetX, offsetY } = e;
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    });

    canvas.addEventListener('mouseup', (e) => {
      const { x, y } = e;
      ctx.moveTo(x, y);
      ctx.stroke();
    });
  }, []);

  // useEffect(() => {
  //   const data = [];
  //   for (let i = 0; i < 7; i++) {
  //     data.push(`http://127.0.0.1:7001/music/find?id=${i}`);
  //   }
  //   getData(data, 3);
  // }, []);

  async function getData(data, maxNum) {
    console.log(data, maxNum);

    const res = await multRequest(data, maxNum);
    console.log(res, 'res 123');
  }

  return <canvas id="canvas" width="300" height="300" style={{ border: '1px solid red' }}></canvas>;
}
