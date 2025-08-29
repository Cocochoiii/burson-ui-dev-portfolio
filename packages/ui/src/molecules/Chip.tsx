import React from 'react';
import clsx from 'clsx';

export type ChipProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Chip: React.FC<ChipProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-chip', className);
  return (
    <As className={classes} {...rest}>
      <span>Chip</span>
      {children}
    </As>
  );
};
export default Chip;