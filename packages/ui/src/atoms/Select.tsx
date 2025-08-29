import React from 'react';
import clsx from 'clsx';

export type SelectProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Select: React.FC<SelectProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-select', className);
  return (
    <As className={classes} {...rest}>
      <span>Select</span>
      {children}
    </As>
  );
};
export default Select;