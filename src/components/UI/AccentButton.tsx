import classes from './AccentButton.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
};

const AccentButton = ({ children }: ButtonProps) => {
  const content = children ?? 'Button Text';
  return <button className={classes.accentButton}>{content}</button>;
};

export default AccentButton;
