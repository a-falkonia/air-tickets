import classes from './Main.module.scss';

interface MainProps {
  children?: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className={classes.main}>{children}</main>;
};

export default Main;
