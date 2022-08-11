import classes from './Header.module.scss';

const Header = (props) => {
    console.log("HEADER COMPONENT")
  return <div className={classes.header}>{props.children}</div>;
};

export default Header;
