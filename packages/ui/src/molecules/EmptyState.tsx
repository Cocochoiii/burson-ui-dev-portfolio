import React from 'react';
import clsx from 'clsx';

export type EmptyStateProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const EmptyState: React.FC<EmptyStateProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-emptystate', className);
  return (
    <As className={classes} {...rest}>
      <span>EmptyState</span>
      {children}
    </As>
  );
};
export default EmptyState;