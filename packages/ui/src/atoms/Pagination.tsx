import React from 'react';
import clsx from 'clsx';

export type PaginationProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Pagination: React.FC<PaginationProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-pagination', className);
  return (
    <As className={classes} {...rest}>
      <span>Pagination</span>
      {children}
    </As>
  );
};
export default Pagination;