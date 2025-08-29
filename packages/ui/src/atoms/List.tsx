import React from 'react';
import clsx from 'clsx';

export type ListProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const List: React.FC<ListProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-list', className);
  return (
    <As className={classes} {...rest}>
      <span>List</span>
      {children}
    </As>
  );
};
export default List;