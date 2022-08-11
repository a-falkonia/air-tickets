export const getIATALogoUrl = (iata) => {
  return `//pics.avs.io/99/36/${iata}.png`;
};
const getConvertedPrice = (price, currency) => {
  switch (currency.label) {
    case 'RUB': {
      return price;
    }
    case 'USD': {
      return Math.ceil(price / 60.63);
    }
    case 'EUR': {
      return Math.ceil(price / 64.09);
    }
    default:
      return price;
  }
};
export const getFormattedPrice = (price, currency) => {
  const convertedPrice = getConvertedPrice(price, currency);
  const formattedPrice = convertedPrice.toLocaleString(currency.locale, {
    style: 'currency',
    currency: currency.label,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formattedPrice;
};
