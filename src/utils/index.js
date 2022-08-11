export const getFormattedOrigin = (iata, name) => {
  return `${iata}, ${name}`;
};

export const getFormattedDestination = (iata, name) => {
  return `${name}, ${iata}`;
};

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
  const formatted = `${dayMonth} ${year}, ${weekday}`;
  return formatted;
};
