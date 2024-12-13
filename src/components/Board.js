import ObjectItem from './ObjectItem';

const Board = ({ objects, onUpdatePosition }) => {
    return (
      <div className="board">
        {objects.map((obj) => (
          <ObjectItem
            key={obj.id}
            id={obj.id}
            image={obj.image}
            x={obj.x}
            y={obj.y}
            onUpdatePosition={onUpdatePosition}
          />
        ))}
      </div>
    );
  };

export default Board;