import classes from './CurrencyWidget.module.scss';
const CurrencyWidget = (props) => {
  const currencyOptions = [
    { id: 0, label: 'RUB' },
    { id: 1, label: 'USD' },
    { id: 2, label: 'EUR' },
    ];
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Валюта</p>
      <div className={classes.btnGroup}>
        {currencyOptions.map(({ id, label }) => (
          <button
            key={id}
            type='button'
            onClick={() => {}}
            className={
              label === 'RUB'
                ? `${classes.btn} + ${classes.btnActive}`
                : classes.btn
            }
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrencyWidget;
