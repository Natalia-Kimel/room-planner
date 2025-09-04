import React, { useRef } from 'react';
import Draggable from 'react-draggable';

const ObjectItem = ({ id, image, x, y, onUpdatePosition }) => {
    const nodeRef = useRef(null);
  
    const handleDrag = (e, data) => {
      onUpdatePosition(id, data.x, data.y);
    };
  
    const handleDragStart = (e) => {
      e.preventDefault();
    };
  
    return (
      <Draggable
        nodeRef={nodeRef}
        defaultPosition={{ x, y }}
        onDrag={handleDrag}
      >
      <div
        ref={nodeRef}
        className="board-item"
      > 
      <img src={image} alt={`Object ${id}`} onDragStart={handleDragStart}/>
      </div>
      </Draggable>
    );
  };  

export default ObjectItem;