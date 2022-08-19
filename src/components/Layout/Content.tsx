import classes from './Content.module.scss';

interface ContentProps {
  children?: React.ReactNode
}

const Content = ({ children }: ContentProps) => {
  return <div className={classes.content}> {children} </div>;
};

export default Content;
