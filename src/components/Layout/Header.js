import classes from './Header.module.scss';

const Header = (props) => {
  return <div className={classes.header}>{props.children}</div>;
};

export default Header;
