import { Ticket } from '../types/';

const filterTickets = (tickets: Ticket[], filters: number[]) => {
  const filtered = tickets.filter(
    (ticket) => filters.indexOf(ticket.stops) !== -1
  );
  return filtered;
};

export default filterTickets;
