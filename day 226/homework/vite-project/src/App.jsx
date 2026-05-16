import React, { useState } from 'react';

export default function App() {
  const initialCube = [
    Array(3).fill(null).map(() => Array(3).fill('red')),
    Array(3).fill(null).map(() => Array(3).fill('blue')),
    Array(3).fill(null).map(() => Array(3).fill('green')),
    Array(3).fill(null).map(() => Array(3).fill('yellow')),
    Array(3).fill(null).map(() => Array(3).fill('white')),
    Array(3).fill(null).map(() => Array(3).fill('orange'))
  ];

  const [cube, setCube] = useState(initialCube);

  const rotateRight = () => {
    setCube(prev => {
      const [F, R, L, B, U, D] = prev;
      return [L, F, B, R, U, D];
    });
  };

  const rotateLeft = () => {
    setCube(prev => {
      const [F, R, L, B, U, D] = prev;
      return [R, B, F, L, U, D];
    });
  };

  const rotateUp = () => {
    setCube(prev => {
      const [F, R, L, B, U, D] = prev;
      return [D, R, L, U, B, F];
    });
  };

  const rotateDown = () => {
    setCube(prev => {
      const [F, R, L, B, U, D] = prev;
      return [U, R, L, D, F, B];
    });
  };

  const moveU = () => {
    setCube(prev => {
      const [F, R, L, B, U, D] = prev.map(face => face.map(row => [...row]));
      const newU = [
        [U[2][0], U[1][0], U[0][0]],
        [U[2][1], U[1][1], U[0][1]],
        [U[2][2], U[1][2], U[0][2]],
      ];
      const temp = [...F[0]];
      F[0] = L[0];
      L[0] = B[0];
      B[0] = R[0];
      R[0] = temp;
      return [F, R, L, B, newU, D];
    });
  };

  const moveD = () => {
    setCube(prev => {
      const [F, R, L, B, U, D] = prev.map(face => face.map(row => [...row]));
      const newD = [
        [D[2][0], D[1][0], D[0][0]],
        [D[2][1], D[1][1], D[0][1]],
        [D[2][2], D[1][2], D[0][2]],
      ];
      const temp = [...F[2]];
      F[2] = R[2];
      R[2] = B[2];
      B[2] = L[2];
      L[2] = temp;
      return [F, R, L, B, U, newD];
    });
  };

  const moveF = () => {
    setCube(prev => {
      const [F, R, L, B, U, D] = prev.map(face => face.map(row => [...row]));
      const newF = [
        [F[2][0], F[1][0], F[0][0]],
        [F[2][1], F[1][1], F[0][1]],
        [F[2][2], F[1][2], F[0][2]],
      ];
      const topRow = [...U[2]];
      const rightCol = R.map(r => r[0]);
      const bottomRow = [...D[0]];
      const leftCol = L.map(l => l[2]);

      R.forEach((r, i) => r[0] = topRow[i]);
      D[0] = rightCol.reverse();
      L.forEach((l, i) => l[2] = bottomRow[i]);
      U[2] = leftCol.reverse();

      return [newF, R, L, B, U, D];
    });
  };

  const Face = ({ face }) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 50px)',
      gridTemplateRows: 'repeat(3, 50px)',
      gap: '2px',
      marginTop: '10px'
    }}>
      {face.flat().map((color, i) => (
        <div key={i} style={{
          backgroundColor: color,
          width: '50px',
          height: '50px',
          border: '1px solid black'
        }} />
      ))}
    </div>
  );

  return (
    <div className="p-6 font-sans">
      <Face face={cube[0]} />
      <div className="flex gap-2 mt-4 flex-wrap">
        <button onClick={rotateLeft} className="px-3 py-2 border rounded">Rotate Left</button>
        <button onClick={rotateRight} className="px-3 py-2 border rounded">Rotate Right</button>
        <button onClick={rotateUp} className="px-3 py-2 border rounded">Rotate Up</button>
        <button onClick={rotateDown} className="px-3 py-2 border rounded">Rotate Down</button>
        <button onClick={moveU} className="px-3 py-2 border rounded">Top</button>
        <button onClick={moveD} className="px-3 py-2 border rounded">Bottom</button>
        <button onClick={moveF} className="px-3 py-2 border rounded">Front</button>
        <button onClick={() => setCube(initialCube)} className="px-3 py-2 border rounded">Reset</button>
      </div>
    </div>
  );
}
