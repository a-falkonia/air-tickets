import classes from './Carrier.module.scss';

const Carrier = (props) => {
  return <div className={classes.carrier}>{props.children}</div>;
};

export default Carrier;
