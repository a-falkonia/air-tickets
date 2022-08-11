import { useEffect, useState } from 'react';
import Checkbox from '../UI/Checkbox';
import classes from './TransfersWidget.module.scss';

const TransfersWidget = (props) => {
  const options = props.options;
  const selectedKeys = options.map((item) => item.key);

  const [isCheckAll, setIsCheckAll] = useState(true);
  const [selected, setSelected] = useState(selectedKeys);

  useEffect(() => {
    props.onFiltersChanged(selected);
  }, [props, selected]);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setSelected(options.map((item) => item.key));

    if (isCheckAll) {
      setSelected([]);
    }
  };

  const handleSelectToggled = (id, checked) => {
    setSelected([...selected, id]);

    if (!checked) {
      setSelected(selected.filter((key) => key !== id));
      setIsCheckAll(false);
      setSelected(selected.filter((item) => item !== 'all' && item !== id));
    }
  };

  const filterOptions = options.map(({ name, key }) => {
    return (
      <Checkbox
        key={key}
        id={key}
        label={name}
        checked={selected.includes(key)}
        handleCheckboxChange={
          key === 'all' ? handleSelectAll : handleSelectToggled
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
