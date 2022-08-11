import classes from './Ticket.module.scss';
import Card from '../UI/Card';
import Button from '../UI/AccentButton'
import Carrier from './Carrier';
import TicketContent from './TicketContent';

import { getIATALogoUrl, getFormattedPrice } from '../../utils/displayTicket';

const Ticket = ({ ticket, currency }) => {

  return (
    <Card>
      <div className={classes.ticket}>
        <div className={classes.sideblock}>
          <Carrier>
            <img src={getIATALogoUrl(ticket.carrier)} alt={ticket.carrier} />
          </Carrier>
          <Button>Купить <br/> за {getFormattedPrice(ticket.price, currency)}</Button>
        </div>
        <TicketContent data={ticket} />
      </div>
    </Card>
  );
};

export default Ticket;
