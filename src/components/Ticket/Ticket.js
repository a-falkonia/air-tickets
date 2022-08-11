import classes from './Ticket.module.scss';
import Card from '../UI/Card';
import Button from '../UI/AccentButton'
import Carrier from './Carrier';
import TicketSegment from './TicketSegment';

import { getIATALogoUrl, getFormattedPrice } from '../../utils/ticket';

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
        <TicketSegment segment={ticket} />
      </div>
    </Card>
  );
};

export default Ticket;
