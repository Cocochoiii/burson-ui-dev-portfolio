import React from 'react';
import clsx from 'clsx';

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Progress: React.FC<ProgressProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-progress', className);
  return (
    <As className={classes} {...rest}>
      <span>Progress</span>
      {children}
    </As>
  );
};
export default Progress;