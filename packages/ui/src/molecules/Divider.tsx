import React from 'react';
import clsx from 'clsx';

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Divider: React.FC<DividerProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-divider', className);
  return (
    <As className={classes} {...rest}>
      <span>Divider</span>
      {children}
    </As>
  );
};
export default Divider;