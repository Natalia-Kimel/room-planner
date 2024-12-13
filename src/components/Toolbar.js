import React from 'react';

const objects = [
    {
        id: 1,
        name: 'Стол на одного',
        image: '/assets/images/table1.JPEG',
    },
    {
        id: 2,
        name: 'Стол на двоих',
        image: '/assets/images/table2.JPEG',
    },
    {
        id: 3,
        name: 'Круглый стол на компанию',
        image: '/assets/images/tableRound4.JPEG',
    },
    {
        id: 4,
        name: 'Квадратный стол на компанию',
        image: '/assets/images/tableSquare4.JPEG', 
    },
    {
        id: 5,
        name: 'Перегородка/стена',
        image: '/assets/images/wall.JPEG', 
    },
    {
        id: 6,
        name: 'Растительная перегородка',
        image: '/assets/images/greenWall.JPEG', 
    },
    {
        id: 7,
        name: 'Растение',
        image: '/assets/images/plant.JPEG', 
    },
  ];  

  const Toolbar = ({ onAddObject }) => {
    return (
      <div className="toolbar">
        <h3>Предметы</h3>
        {objects.map((obj) => (
          <div
            key={obj.id}
            className="object"
            onClick={() => onAddObject(obj)}
          >
            <img src={obj.image} alt={obj.name} />
            <span>{obj.name}</span>
          </div>
        ))}
      </div>
    );
  };  

export default Toolbar;