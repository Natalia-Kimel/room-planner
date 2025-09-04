import React from 'react';

const objects = [
    {
        id: 1,
        name: 'Стол на одного',
        image: `${process.env.PUBLIC_URL}/assets/images/table1.JPEG`,
    },
    {
        id: 2,
        name: 'Стол на двоих',
        image: `${process.env.PUBLIC_URL}/assets/images/table2.JPEG`,
    },
    {
        id: 3,
        name: 'Круглый стол на компанию',
        image: `${process.env.PUBLIC_URL}/assets/images/tableRound4.JPEG`,
    },
    {
        id: 4,
        name: 'Квадратный стол на компанию',
        image: `${process.env.PUBLIC_URL}/assets/images/tableSquare4.JPEG`, 
    },
    {
        id: 5,
        name: 'Перегородка/стена',
        image: `${process.env.PUBLIC_URL}/assets/images/wall.JPEG`, 
    },
    {
        id: 6,
        name: 'Растительная перегородка',
        image: `${process.env.PUBLIC_URL}/assets/images/greenWall.JPEG`, 
    },
    {
        id: 7,
        name: 'Растение',
        image: `${process.env.PUBLIC_URL}/assets/images/plant.JPEG`, 
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