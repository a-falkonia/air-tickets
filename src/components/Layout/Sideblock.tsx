import classes from './Sideblock.module.scss';

interface SideblockProps {
  children?: React.ReactNode;
}

const Sideblock = ({ children }: SideblockProps) => {
  return <div className={classes.sideblock}>{children}</div>;
};

export default Sideblock;
