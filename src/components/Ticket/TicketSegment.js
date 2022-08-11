import classes from './TicketSegment.module.scss';
import TicketRoutePoint from './TicketRoutePoint';
import { getFormattedDestination, getFormattedOrigin, getFormattedDate } from '../../utils';

const TicketSegment = ({segment}) => {
  const origin = getFormattedOrigin(segment.origin, segment.origin_name)
  const destination = getFormattedDestination(segment.destination, segment.destination_name)
  
  return (
    <div className={classes.content}>
      <div className={classes.origin}>
        <TicketRoutePoint
          name={origin}
          time={segment.departure_time}
          date={getFormattedDate(segment.departure_date)}
        />
      </div>
      <div className={classes.transfers}>2 пересадки</div>
      <div className={classes.destination}>
        <TicketRoutePoint
          name={destination}
          time={segment.arrival_time}
          date={getFormattedDate(segment.arrival_date)}
        />
      </div>
    </div>
  );
};

export default TicketSegment;
