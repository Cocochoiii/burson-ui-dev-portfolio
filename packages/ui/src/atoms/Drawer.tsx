import React from 'react';
import clsx from 'clsx';

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Drawer: React.FC<DrawerProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-drawer', className);
  return (
    <As className={classes} {...rest}>
      <span>Drawer</span>
      {children}
    </As>
  );
};
export default Drawer;