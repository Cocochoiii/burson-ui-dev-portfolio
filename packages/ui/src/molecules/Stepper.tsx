import React from 'react';
import clsx from 'clsx';

export type StepperProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Stepper: React.FC<StepperProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-stepper', className);
  return (
    <As className={classes} {...rest}>
      <span>Stepper</span>
      {children}
    </As>
  );
};
export default Stepper;