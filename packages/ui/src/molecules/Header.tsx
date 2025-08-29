import React from 'react';
import clsx from 'clsx';

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Header: React.FC<HeaderProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-header', className);
  return (
    <As className={classes} {...rest}>
      <span>Header</span>
      {children}
    </As>
  );
};
export default Header;