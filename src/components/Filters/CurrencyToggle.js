import RadioButtongroup from '../UI/RadioButtonGroup';
import classes from './CurrencyToggle.module.scss';
const currencyOptions = [
  { locale: 'ru-RU', label: 'RUB' },
  { locale: 'en-US', label: 'USD' },
  { locale: 'de-DE', label: 'EUR' },
];

const CurrencyWidget = (props) => {
  const handleCurrencyChange = (currency) => {
    // finding currency with selected label
    const [selected] = currencyOptions.filter(
      (item) => item.label === currency
    );

    props.onCurrencyChange(selected);
  };

  //Passing currency labels to RadioButtonGroup
  const labels = currencyOptions.map((item) => item.label);

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Валюта</p>
      <RadioButtongroup
        onChange={handleCurrencyChange}
        values={labels}
        selected={'RUB'}
      />
    </div>
  );
};

export default CurrencyWidget;
