import Ticket from './Ticket/Ticket';
import './TicketsList.module.scss';

const TicketsList = ({ tickets, currency }) => {
  return (
    <ul>
      {tickets.map((ticket) => (
        <li key={ticket.id}>
          <Ticket ticket={ticket} currency={currency} />
        </li>
      ))}
    </ul>
  );
};

export default TicketsList;
