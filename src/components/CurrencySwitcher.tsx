import React from 'react';
import RadioButtongroup from './UI/RadioButtonGroup';
import classes from './CurrencySwitcher.module.scss';
import { Currency } from '../types';
const currencyOptions = [
  { locale: 'ru-RU', label: 'RUB' },
  { locale: 'en-US', label: 'USD' },
  { locale: 'de-DE', label: 'EUR' },
];

interface currencyWidgetProps {
  onCurrencyChange: (selected: Currency) => void;
}

const CurrencyWidget = ({ onCurrencyChange }: currencyWidgetProps) => {
  const handleCurrencyChange = (currencyLabel: string) => {
    // finding currency with selected label
    const [selected] = currencyOptions.filter(
      (item) => item.label === currencyLabel
    );

    onCurrencyChange(selected);
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

export default React.memo(CurrencyWidget);
