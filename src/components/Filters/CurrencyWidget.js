import RadioButtongroup from '../UI/RadioButtonGroup';
import classes from './CurrencyWidget.module.scss';
const currencyOptions = [
  { label: 'RUB', symbol: '₽' },
  { label: 'USD', symbol: '$' },
  { label: 'EUR', symbol: '€' },
];

const CurrencyWidget = (props) => {
  
  const handleCurrencyChange = (currency) => {
    console.log(currency)
  }

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Валюта</p>
      <RadioButtongroup
        onChange={handleCurrencyChange}
        values={currencyOptions}
        selected={'RUB'}
      />
    </div>
  );
};

export default CurrencyWidget;
