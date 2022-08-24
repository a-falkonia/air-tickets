import React, { useEffect, useState } from 'react';
import Checkbox from './UI/Checkbox';
import classes from './Filters.module.scss';

import filtersData from '../api/filters.json';
import { FilterOption } from '../types';

interface FiltersProps {
  onFiltersChanged: (selected: number[]) => void;
}

const Filters = ({ onFiltersChanged }: FiltersProps) => {
  const [filters, setFilters] = useState<FilterOption[]>([]);
  const [filtersAmount, setFiltersAmount] = useState(0);
  const [isCheckAll, setIsCheckAll] = useState(true);
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    // "Fetching" filters
    const data = filtersData.filters;
    let options: FilterOption[] = [];

    // Adding options of each filter to filters array
    data.forEach((filter) => {
      options = [...options, ...filter.options];
    });
    setFilters(options);
    setFiltersAmount(options.length);
    // Selecting all filteres by default
    setSelected(options.map((item) => item.key));
  }, []);

  useEffect(() => {
    onFiltersChanged(selected);
  }, [onFiltersChanged, selected]);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);

    if (!isCheckAll) {
      // if 'all' was not checked, adding all options to selected
      setSelected(filters.map((item) => item.key));
    } else {
      // otherwise reset selected
      setSelected([]);
    }
  };

  const handleSelectToggled = (id: number, checked: boolean) => {
    // if checking, adding id to selected filters

    if (!checked) {
      // if unchecking, removing id and 'all' from selected filters
      setIsCheckAll(false);
      setSelected(selected.filter((key) => key !== -1 && key !== id));
    } else if (checked && selected.length + 2 === filtersAmount) {
      // if checking and all filters from id and 'all' are selected, check id and all
      setIsCheckAll(true);
      setSelected([...selected, id, -1]);
    } else if (checked) {
      // if checking, adding id to selected filters
      setSelected([...selected, id]);
    }
  };

  const handleSelectOnly = (id: number) => {
    if (id === -1) {
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

  const filterOptions = filters.map(({ name, key }) => {
    return (
      <Checkbox
        key={key}
        id={key}
        label={name}
        checked={selected.indexOf(key) !== -1}
        handleCheckboxChange={
          key === -1 ? handleSelectAll : handleSelectToggled
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

export default React.memo(Filters);
