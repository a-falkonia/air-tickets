import { useState } from 'react';
import Checkbox from '../UI/Checkbox';
import classes from './TransfersWidget.module.scss';
const transferOptions = [
  {
    name: 'Все',
    key: 'all',
  },
  {
    name: 'Без пересадок',
    key: 0,
  },
  {
    name: '1 пересадка',
    key: 1,
  },
  {
    name: '2 пересадки',
    key: 2,
  },
  {
    name: '3 пересадки',
    key: 3,
  },
];
const TransfersWidget = (props) => {
  const [selectedTransfers, setSelectedTransfers] = useState(new Set(['all']));

  const handleFilterToggled = (id) => {
    if (selectedTransfers.has(id)) {
      setSelectedTransfers(
        (selectedTransfers) =>
          new Set([...selectedTransfers].filter((filter) => filter !== id))
      );
    } else {
      setSelectedTransfers((selectedTransfers) =>
        new Set([...selectedTransfers]).add(id)
      );
    }
  };

  
  return (
    <div className={classes.filter}>
      <p className={classes.title}>Количество пересадок</p>

      {transferOptions.map(({ name, key }) => (
        <Checkbox
          checked={selectedTransfers.has(key)}
          handleCheckboxChange={handleFilterToggled}
          label={name}
          id={key}
          key={key}
        />
      ))}
    </div>
  );
};

export default TransfersWidget;
