import classes from './TicketRoutePoint.module.scss';

const TicketRoutePoint = (props) => {
  return (
    <div className={classes.routepoint}>
      <p className={classes.time}>{props.time}</p>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.date}>{props.date}</p>
    </div>
  );
};

export default TicketRoutePoint;
