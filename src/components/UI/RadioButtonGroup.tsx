import { useState } from 'react';
import classes from './RadioButtonGroup.module.scss';

interface RadioButtonGroupProps {
  values: string[];
  selected: string;
  onChange: (id: string) => void;
}

const RadioButtongroup = ({
  values,
  selected,
  onChange,
}: RadioButtonGroupProps) => {
  const [toggled, setToggled] = useState(selected);

  const handleToggled = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;

    setToggled(target.id);
    onChange(target.id);
  };

  return (
    <div className={classes.btnGroup}>
      {values.map((label) => (
        <button
          id={label}
          key={label}
          type='button'
          onClick={handleToggled}
          className={
            label === toggled
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
