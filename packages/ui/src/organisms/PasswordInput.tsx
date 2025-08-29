import React from 'react';
import clsx from 'clsx';

export type PasswordInputProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const PasswordInput: React.FC<PasswordInputProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-passwordinput', className);
  return (
    <As className={classes} {...rest}>
      <span>PasswordInput</span>
      {children}
    </As>
  );
};
export default PasswordInput;