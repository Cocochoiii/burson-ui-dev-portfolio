import React from 'react';
import clsx from 'clsx';

export type PopoverProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Popover: React.FC<PopoverProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-popover', className);
  return (
    <As className={classes} {...rest}>
      <span>Popover</span>
      {children}
    </As>
  );
};
export default Popover;