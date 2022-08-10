import classes from './BuyButton.module.scss';
const BuyButton = (props) => {
  return <button className={classes.buyButton}>{props.text}</button>;
};

export default BuyButton;
