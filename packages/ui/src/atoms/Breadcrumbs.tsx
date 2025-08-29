import React from 'react';
import clsx from 'clsx';

export type BreadcrumbsProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-breadcrumbs', className);
  return (
    <As className={classes} {...rest}>
      <span>Breadcrumbs</span>
      {children}
    </As>
  );
};
export default Breadcrumbs;