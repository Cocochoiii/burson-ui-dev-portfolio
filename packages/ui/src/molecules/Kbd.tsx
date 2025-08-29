import React from 'react';
import clsx from 'clsx';

export type KbdProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Kbd: React.FC<KbdProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-kbd', className);
  return (
    <As className={classes} {...rest}>
      <span>Kbd</span>
      {children}
    </As>
  );
};
export default Kbd;