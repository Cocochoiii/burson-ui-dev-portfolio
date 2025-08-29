import React from 'react';
import clsx from 'clsx';

export type SidebarProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Sidebar: React.FC<SidebarProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-sidebar', className);
  return (
    <As className={classes} {...rest}>
      <span>Sidebar</span>
      {children}
    </As>
  );
};
export default Sidebar;