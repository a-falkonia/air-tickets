const filterTickets = (tickets, filters) => {
  const filtered = tickets.filter(
    (ticket) => filters.indexOf(ticket.stops) !== -1
  );
  return filtered;
};

export default filterTickets;
