import React from 'react';
import clsx from 'clsx';

export type FooterProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Footer: React.FC<FooterProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-footer', className);
  return (
    <As className={classes} {...rest}>
      <span>Footer</span>
      {children}
    </As>
  );
};
export default Footer;