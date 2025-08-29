import React from 'react';
import clsx from 'clsx';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Skeleton: React.FC<SkeletonProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-skeleton', className);
  return (
    <As className={classes} {...rest}>
      <span>Skeleton</span>
      {children}
    </As>
  );
};
export default Skeleton;