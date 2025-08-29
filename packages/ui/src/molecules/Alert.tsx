import React from 'react';
import clsx from 'clsx';

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Alert: React.FC<AlertProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-alert', className);
  return (
    <As className={classes} {...rest}>
      <span>Alert</span>
      {children}
    </As>
  );
};
export default Alert;