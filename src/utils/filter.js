const filterTickets = (tickets, filters) => {
  const filtered = tickets.filter((ticket) => filters.includes(ticket.stops));
  return filtered;
};

export default filterTickets;
