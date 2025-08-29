import React from 'react';
import clsx from 'clsx';

export type ToastProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Toast: React.FC<ToastProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-toast', className);
  return (
    <As className={classes} {...rest}>
      <span>Toast</span>
      {children}
    </As>
  );
};
export default Toast;