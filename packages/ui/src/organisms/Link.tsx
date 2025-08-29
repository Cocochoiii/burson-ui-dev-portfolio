import React from 'react';
import clsx from 'clsx';

export type LinkProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Link: React.FC<LinkProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-link', className);
  return (
    <As className={classes} {...rest}>
      <span>Link</span>
      {children}
    </As>
  );
};
export default Link;