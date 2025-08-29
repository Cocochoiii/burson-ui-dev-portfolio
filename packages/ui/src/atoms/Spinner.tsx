import React from 'react';
import clsx from 'clsx';

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Spinner: React.FC<SpinnerProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-spinner', className);
  return (
    <As className={classes} {...rest}>
      <span>Spinner</span>
      {children}
    </As>
  );
};
export default Spinner;