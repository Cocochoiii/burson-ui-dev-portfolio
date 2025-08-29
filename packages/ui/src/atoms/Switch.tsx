import React from 'react';
import clsx from 'clsx';

export type SwitchProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Switch: React.FC<SwitchProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-switch', className);
  return (
    <As className={classes} {...rest}>
      <span>Switch</span>
      {children}
    </As>
  );
};
export default Switch;