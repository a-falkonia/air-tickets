import Card from '../UI/Card';
import classes from './Ticket.module.scss';
import BuyButton from '../UI/BuyButton';
import TicketCarrierLogo from './TicketCarrierLogo';
import TicketContent from './TicketContent';

const Ticket = (props) => {
  return (
    <li>
      <Card>
        <div className={classes.ticket}>
          <div className={classes.sideblock}>
            <TicketCarrierLogo carriers={props.data.carrier} />
            <BuyButton price={props.data.price} />
          </div>
          <TicketContent data={props.data} />
        </div>
      </Card>
    </li>
  );
};

export default Ticket;
