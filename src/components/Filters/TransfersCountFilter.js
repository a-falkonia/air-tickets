import { useEffect, useState } from 'react';
import Checkbox from '../UI/Checkbox';
import classes from './TransfersCountFilter.module.scss';

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

    if (!isCheckAll) {
      // if 'all' was not checked, adding all options to selected
      setSelected(options.map((item) => item.key));
    } else {
      // otherwise reset selected
      setSelected([]);
    }
  };

  const handleSelectToggled = (id, checked) => {
    // if checking, adding id to selected filters
    setSelected([...selected, id]);

    if (!checked) {
      // if unchecking, removing id and 'all' from selected filters
      setIsCheckAll(false);
      setSelected(selected.filter((item) => item !== 'all' && item !== id));
    }
  };

  const handleSelectOnly = (id) => {
    if (id === 'all') {
      // handleSelectOnly works on 'all' only if 'all' is not selected
      if (!isCheckAll) {
        handleSelectAll();
      }
    } else {
      // Setting 'all' to false, selecting only the passed id
      setIsCheckAll(false);
      setSelected([id]);
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
        handleButtonClick={handleSelectOnly}
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
