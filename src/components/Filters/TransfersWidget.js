import { useState, useEffect } from 'react';
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
  const [isCheckAll, setIsCheckAll] = useState(true);
  const [selected, setSelected] = useState([]);
  const [optionsList, setOptionsList] = useState([]);

  useEffect(() => {
    setOptionsList(transferOptions);
    setSelected(optionsList.map((item) => item.key));
  
  }, [optionsList]);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setSelected(optionsList.map((item) => item.key));
    if (isCheckAll) {
      setSelected([]);
    }
  };

  const handleFilterToggled = (id, checked) => {
    setSelected([...selected, id]);

    if (!checked) {
      setSelected(selected.filter((key) => key !== id));
      setIsCheckAll(false);
      setSelected(selected.filter((item) => item!=='all' && item!==id));
    }
  };

  console.log(selected);
  console.log(isCheckAll)

  const filterOptions = optionsList.map(({ name, key }) => {
    return (
      <Checkbox
        key={key}
        id={key}
        label={name}
        checked={selected.includes(key)}
        handleCheckboxChange={
          key === 'all' ? handleSelectAll : handleFilterToggled
        }
      />
    );
  });

  return (
    <div className={classes.filter}>
      <p className={classes.title}>Количество пересадок</p>
      {filterOptions}
    </div>
  );
};

export default TransfersWidget;
