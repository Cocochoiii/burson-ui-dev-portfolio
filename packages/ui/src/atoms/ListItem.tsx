import React from 'react';
import clsx from 'clsx';

export type ListItemProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const ListItem: React.FC<ListItemProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-listitem', className);
  return (
    <As className={classes} {...rest}>
      <span>ListItem</span>
      {children}
    </As>
  );
};
export default ListItem;