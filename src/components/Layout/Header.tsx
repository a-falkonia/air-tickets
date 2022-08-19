import classes from './Header.module.scss';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <div className={classes.header}>{children}</div>;
};

export default Header;
