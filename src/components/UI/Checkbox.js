import classes from './Checkbox.module.scss';

const Checkbox = (props) => {
  const checked = props.checked;

  const toggleChange = () => {
    props.handleCheckboxChange(props.id, !checked);
  };

  const clickBtn = () => {
    props.handleButtonClick(props.id);
  }

  return (
    <label className={classes.checkboxLabel}>
      <input
        type='checkbox'
        checked={checked}
        className={classes.hiddenCheckbox}
        onChange={toggleChange}
      />
      <svg
        className={`${classes.checkbox} + ${
          checked ? classes.checkboxActive : ''
        }`}
        width='19'
        height='19'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
      >
        <rect
          x='0.5'
          y='0.5'
          width='18'
          height='18'
          rx='2.5'
          stroke='#c1c1c1'
        />
        <path
          d='M 9.2857 12.5 L 6 9.5 L 7 8.5 L 9.2857 10.3273 L 13 6.5 L 14 7.5 L 9.2857 12.5 Z'
          fill='none'
        />
      </svg>
      <div className={classes.label}>{props.label}</div>
      <button className={classes.btnOnly} onClick={clickBtn}>
        только
      </button>
    </label>
  );
};

export default Checkbox;
