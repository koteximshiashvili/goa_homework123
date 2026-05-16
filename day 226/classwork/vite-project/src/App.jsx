import { useEffect, useState } from 'react';

function App() {
  const getStored = (key, smth) => {
      const item = localStorage.getItem(key);
      const parsed = JSON.parse(item);
      return parsed || smth;
  };

  const [gridX, setGridX] = useState(() => getStored('grid_x', 1));
  const [gridY, setGridY] = useState(() => getStored('grid_y', 1));
  const [size, setSize] = useState(() => getStored('size', 100));
  const [grid, setGrid] = useState(() => getStored('grid', [[{ color: '#ffffff', size: 100 }]]));
  const [color, setColor] = useState('#000000');
  const [erase, setErase] = useState(false);
  const [lineColor, setLineColor] = useState('#000000');
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    localStorage.setItem('grid', JSON.stringify(grid));
  }, [grid]);

  useEffect(() => {
    localStorage.setItem('size', JSON.stringify(size));
    setGrid(prev => prev.map((row) => row.map((cell) => ({ ...cell, size }))));
  }, [size]);

  useEffect(() => {
    setGrid(prev => {
      const newGrid = [];
      for (let i = 0; i < gridY; i++) {
        const row = [];
        for (let j = 0; j < gridX; j++) {
          row.push(prev[i]?.[j] || { color: '#ffffff', size });
        }
        newGrid.push(row);
      }
      return newGrid;
    });
  }, [gridX, gridY]);


  useEffect(() => {
    const handleUp = () => setIsMouseDown(false);
    window.addEventListener('mouseup', handleUp);
    return () => window.removeEventListener('mouseup', handleUp);
  }, []);

  const paintCell = (rowIndex, colIndex) => {
    setGrid((prev) => {
      const newGrid = prev.map((row, r) => row.map((cell, c) => r === rowIndex && c === colIndex ? { ...cell, color: erase ? '#ffffff' : color } : cell));
      return newGrid;
    });
  };

  return (
    <>
      <div onMouseDown={() => setIsMouseDown(true)} onMouseUp={() => setIsMouseDown(false)} onMouseLeave={() => setIsMouseDown(false)}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((cell, colIndex) => (
              <div key={colIndex} onMouseEnter={() => isMouseDown && paintCell(rowIndex, colIndex)} onMouseDown={() => paintCell(rowIndex, colIndex)} style={{ backgroundColor: cell.color, width: `${cell.size}px`, height: `${cell.size}px`, border: `1px solid ${lineColor}` }}></div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
        <label>
          Cell color: <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <label>
          Line color: <input type="color" value={lineColor} onChange={(e) => setLineColor(e.target.value)} />
        </label>
        <label>
          X: <input type="number" min={1} value={gridX} onChange={(e) => setGridX(Number(e.target.value))} />
        </label>
        <label>
          Y: <input type="number" min={1} value={gridY} onChange={(e) => setGridY(Number(e.target.value))} />
        </label>
        <label>
          Size: <input type="number" min={1} value={size} onChange={(e) => setSize(Number(e.target.value))} />
        </label>
        <button onClick={() => setErase((prev) => !prev)}>
          {erase ? 'Stop erasing' : 'Erase'}
        </button>
      </div>
    </>
  );
}

export default App;
