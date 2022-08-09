import React from 'react';
import classes from './Layout.module.scss';

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.layout}>
        {React.Children.map(props.children, (child) => (
          <div>{child}</div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
