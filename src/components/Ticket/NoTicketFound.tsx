import Card from '../UI/Card';
import classes from './NoTicketFound.module.scss';

const NoTicketFound = () => {
  return (
    <Card>
      <div className={classes.noTicketFound}>
        <span className={classes.emoji} role='img' aria-label='sad emoji'>
          😢
        </span>
        <div className={classes.title}>Слишком жёсткие фильтры</div>
        <p className={classes.text}>
          Ни один из билетов не соответствует найденным фильтрам
        </p>
      </div>
    </Card>
  );
};

export default NoTicketFound;
