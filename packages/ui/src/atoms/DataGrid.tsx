import React from 'react';
import clsx from 'clsx';

export type DataGridProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const DataGrid: React.FC<DataGridProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-datagrid', className);
  return (
    <As className={classes} {...rest}>
      <span>DataGrid</span>
      {children}
    </As>
  );
};
export default DataGrid;