import React from 'react';
import clsx from 'clsx';

export type NavbarProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Navbar: React.FC<NavbarProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-navbar', className);
  return (
    <As className={classes} {...rest}>
      <span>Navbar</span>
      {children}
    </As>
  );
};
export default Navbar;