import classes from './TicketContent.module.scss';
import TicketRoutePoint from './TicketRoutePoint';

const TicketContent = (props) => {
    const departureName = `${props.data.origin}, ${props.data.origin_name}`
    const destinationName = `${props.data.destination_name}, ${props.data.destination}`;

  return (
    <div className={classes.content}>
      <div className={classes.departure}>
        <TicketRoutePoint
          name={departureName}
          time={props.data.departure_time}
          date={props.data.departure_date}
        />
      </div>
      <div className={classes.transfers}>2 пересадки</div>
      <div className={classes.destination}>
        <TicketRoutePoint
          name={destinationName}
          time={props.data.arrival_time}
          date={props.data.arrival_date}
        />
      </div>
    </div>
  );
};

export default TicketContent;
