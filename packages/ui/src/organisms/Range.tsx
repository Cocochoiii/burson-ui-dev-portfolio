import React from 'react';
import clsx from 'clsx';

export type RangeProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Range: React.FC<RangeProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-range', className);
  return (
    <As className={classes} {...rest}>
      <span>Range</span>
      {children}
    </As>
  );
};
export default Range;