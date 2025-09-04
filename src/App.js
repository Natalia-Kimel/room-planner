import React, { useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Board from './components/Board/Board';
import './App.css';
import SaveItem from './components/SaveItem/SaveItem';

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

  return (
    <>
      <div className="container">
        <Toolbar onAddObject={handleAddObject} />
        <Board
          objects={objects}
          onUpdatePosition={handleUpdatePosition}
        />
        <SaveItem />
      </div>
    </>
  );
};

export default App;