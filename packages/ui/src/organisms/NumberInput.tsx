import React from 'react';
import clsx from 'clsx';

export type NumberInputProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const NumberInput: React.FC<NumberInputProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-numberinput', className);
  return (
    <As className={classes} {...rest}>
      <span>NumberInput</span>
      {children}
    </As>
  );
};
export default NumberInput;