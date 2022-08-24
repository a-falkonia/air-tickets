import TicketCard from './Ticket/TicketCard';
import './TicketsList.module.scss';
import { Currency, Ticket } from '../types/';

interface TicketListProps {
  tickets: Ticket[];
  currency: Currency;
}

const TicketsList = ({ tickets, currency }: TicketListProps) => {
  return (
    <ul>
      {tickets.map((ticket) => (
        <li key={ticket.id}>
          <TicketCard ticket={ticket} currency={currency} />
        </li>
      ))}
    </ul>
  );
};

export default TicketsList;
