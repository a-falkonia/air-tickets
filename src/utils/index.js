export const getFormattedOrigin = (iata, name) => {
  return `${iata}, ${name}`;
};

export const getFormattedDestination = (iata, name) => {
  return `${name}, ${iata}`;
};

const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1);
}

export const getFormattedDate = (date) => {
  // parsing data from dd.mm.yyyy format to new Date
  const parts = date.split('.');
  const day = parts[0];
  const month = parts[1];
  const year = '20' + parts[2];
  const d = new Date(year, month - 1, day);

  //getting formated Date parts
  const dayMonth = d.toLocaleString('ru-ru', {
    day: 'numeric',
    month: 'short',
  });

  const weekday = d.toLocaleDateString('ru-ru', {
    weekday: 'short',
  });
  
  //combining formatted parts
  const formatted = `${dayMonth} ${year}, ${capitalize(weekday)}`;
  return formatted;
};

const createCountFormatter = (one, two, few) => {
  const titles = [one, two, few];

  return (n) => {
    const cases = [2, 0, 1, 1, 1, 2];

    return titles[
      n % 100 > 4 && n % 100 < 20 ? 2 : cases[n % 10 < 5 ? n % 10 : 5]
    ];
  };
};
const transfersCountFormatter = createCountFormatter(
  'пересадка',
  'пересадки',
  'пересадок'
);

export const transfersFormatter = (n) => {
  switch (n) {
    case 0: {
      return `Без ${transfersCountFormatter(n)}`;
    }
    default: {
      return `${n} ${transfersCountFormatter(n)}`;
    }
  }
};
