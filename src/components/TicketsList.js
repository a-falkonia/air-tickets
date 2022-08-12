import NoTicketFound from './Ticket/NoTicketFound';
import Ticket from './Ticket/Ticket';
import './TicketsList.module.scss';

const TicketsList = ({tickets, currency}) => {

  return (
    <ul>
      {tickets.length === 0 ? (
        <li>
          <NoTicketFound />
        </li>
      ) : (
        tickets.map((ticket) => (
          <li key={ticket.id}>
            <Ticket ticket={ticket} currency={currency} />
          </li>
        ))
      )}
    </ul>
  );
};

export default TicketsList;
