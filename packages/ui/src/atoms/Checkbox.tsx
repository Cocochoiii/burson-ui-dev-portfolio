import React from 'react';
import clsx from 'clsx';

export type CheckboxProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Checkbox: React.FC<CheckboxProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-checkbox', className);
  return (
    <As className={classes} {...rest}>
      <span>Checkbox</span>
      {children}
    </As>
  );
};
export default Checkbox;