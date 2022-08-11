import classes from './AccentButton.module.scss';
const AccentButton = (props) => {
  const children = props.children ?? 'Button Text'
  return <button className={classes.accentButton}>{children}</button>;
};

export default AccentButton;
