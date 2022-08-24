import classes from './TicketSegment.module.scss';
import airplane from '../../assets/airplane.svg';
import { Ticket } from '../../types/';

import {
  getFormattedDestination,
  getFormattedOrigin,
  getFormattedDate,
  transfersFormatter,
} from '../../utils';

interface TicketSegmentProps {
  segment: Ticket;
}

const TicketSegment = ({ segment }: TicketSegmentProps) => {
  const origin = getFormattedOrigin(segment.origin, segment.origin_name);
  const destination = getFormattedDestination(
    segment.destination,
    segment.destination_name
  );

  return (
    <div className={classes.content}>
      <div className={classes.rowWrapper}>
        <div className={classes.time}>{segment.departure_time}</div>
        <div className={classes.transfersWrapper}>
          <div className={classes.transfers}>
            {transfersFormatter(segment.stops)}
          </div>
          <div className={classes.imgWrap}>
            <img
              src={airplane}
              alt={'airplane'}
              className={classes.airplane}
            ></img>
          </div>
        </div>
        <div className={classes.time}>{segment.arrival_time}</div>
      </div>
      <div className={classes.rowWrapper}>
        <div className={classes.alignLeft}>
          <div className={classes.airportName}>{origin}</div>
          <div>{getFormattedDate(segment.departure_date)}</div>
        </div>
        <div className={classes.alignRight}>
          <div className={classes.airportName}>{destination}</div>
          <div>{getFormattedDate(segment.arrival_date)}</div>
        </div>
      </div>
    </div>
  );
};

export default TicketSegment;
