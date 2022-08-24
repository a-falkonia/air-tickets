import classes from './Carrier.module.scss';

interface CarrierProps {
  children?: React.ReactNode;
}

const Carrier = ({ children }: CarrierProps) => {
  return <div className={classes.carrier}> {children} </div>;
};

export default Carrier;
