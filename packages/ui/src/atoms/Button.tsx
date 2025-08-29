import React from 'react';
import clsx from 'clsx';

export type ButtonProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Button: React.FC<ButtonProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-button', className);
  return (
    <As className={classes} {...rest}>
      <span>Button</span>
      {children}
    </As>
  );
};
export default Button;