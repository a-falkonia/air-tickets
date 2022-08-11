import classes from './Checkbox.module.scss';

const Checkbox = (props) => {
  const checked = props.checked;

  const toggleChange = () => {
    props.handleCheckboxChange(props.id, !checked);
  };

  const clickBtn = () => {
    props.handleButtonClick(props.id);
  };

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
        width='21'
        height='21'
        viewBox='0 0 21 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
      >
        <rect
          x='0.5'
          y='0.5'
          width='20'
          height='20'
          rx='2.5'
          stroke='#c1c1c1'
        />
        <path
          d='M15.2266 7.0618 14.0019 5.8371C13.8794 5.7146 13.6753 5.7146 13.512 5.8371L8.4906 10.8176 6.776 9.103C6.6536 8.9805 6.4494 8.9805 6.327 9.103L5.0614 10.3277C4.939 10.4502 4.939 10.6543 5.0614 10.7768L8.2457 13.9202C8.3273 14.0019 8.409 14.0427 8.4906 14.0427 8.5723 14.0427 8.6539 14.0019 8.7356 13.9202L15.2266 7.5109C15.2674 7.47 15.3082 7.3884 15.3082 7.3067 15.3082 7.2251 15.2674 7.1434 15.2266 7.0618ZM15.2266 7.0618'
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
