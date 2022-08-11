import { useState } from 'react';
import classes from './RadioButtonGroup.module.scss';

const RadioButtongroup = (props) => {
  const options = props.values;
  const [checked, setChecked] = useState(props.selected);

  const handleChecked = (e) => {
    setChecked(e.target.id);
    props.onChange(e.target.id);
  };

  return (
    <div className={classes.btnGroup}>
      {options.map(({ label }) => (
        <button
          id={label}
          key={label}
          type='button'
          onClick={handleChecked}
          className={
            label === checked
              ? `${classes.btn} + ${classes.btnActive}`
              : classes.btn
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default RadioButtongroup;
