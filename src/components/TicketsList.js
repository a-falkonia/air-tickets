import NoTicketFound from './Ticket/NoTicketFound';
import Ticket from './Ticket/Ticket';
import './TicketsList.module.scss';

const TicketsList = (props) => {
  const tickets = props.items;

  return (
    <ul>
      {tickets.length === 0 ? (
        <NoTicketFound />
      ) : (
        tickets.map((ticket) => <Ticket data={ticket} />)
      )}
    </ul>
  );
};

export default TicketsList;
