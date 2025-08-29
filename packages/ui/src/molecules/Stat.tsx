import React from 'react';
import clsx from 'clsx';

export type StatProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Stat: React.FC<StatProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-stat', className);
  return (
    <As className={classes} {...rest}>
      <span>Stat</span>
      {children}
    </As>
  );
};
export default Stat;