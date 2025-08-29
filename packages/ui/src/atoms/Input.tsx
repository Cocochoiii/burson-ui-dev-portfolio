import React from 'react';
import clsx from 'clsx';

export type InputProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Input: React.FC<InputProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-input', className);
  return (
    <As className={classes} {...rest}>
      <span>Input</span>
      {children}
    </As>
  );
};
export default Input;