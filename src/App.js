import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import Board from './components/Board';
import './App.css';

let idCounter = 1;

const App = () => {
  const [objects, setObjects] = useState([]);

  const handleAddObject = (obj) => {
    setObjects([
      ...objects,
      { id: idCounter++, image: obj.image, x: 50, y: 50 },
    ]);
  };

  const handleUpdatePosition = (id, x, y) => {
    setObjects((prevObjects) =>
      prevObjects.map((obj) =>
        obj.id === id ? { ...obj, x, y } : obj
      )
    );
  };

  const handleSave = () => {
    const data = JSON.stringify(objects);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'layout.json';
    a.click();
  };

  const handleLoad = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setObjects(JSON.parse(e.target.result));
    };
    reader.readAsText(file);
  };

  return (
    <>
      <div className="container">
        <Toolbar onAddObject={handleAddObject} />
        <Board
          objects={objects}
          onUpdatePosition={handleUpdatePosition}
        />
        <div className="actions">
          <button onClick={handleSave} className="btn">Save Layout</button>
          <input
            type="file"
            accept="application/json"
            onChange={handleLoad}
            className="file-input"
          />
        </div>
      </div>
    </>
  );
};

export default App;