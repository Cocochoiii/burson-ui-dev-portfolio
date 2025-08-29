import React from 'react';
import clsx from 'clsx';

export type TableProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Table: React.FC<TableProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-table', className);
  return (
    <As className={classes} {...rest}>
      <span>Table</span>
      {children}
    </As>
  );
};
export default Table;