import React from 'react';
import clsx from 'clsx';

export type TooltipProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Tooltip: React.FC<TooltipProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-tooltip', className);
  return (
    <As className={classes} {...rest}>
      <span>Tooltip</span>
      {children}
    </As>
  );
};
export default Tooltip;