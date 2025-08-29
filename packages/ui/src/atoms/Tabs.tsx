import React from 'react';
import clsx from 'clsx';

export type TabsProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Tabs: React.FC<TabsProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-tabs', className);
  return (
    <As className={classes} {...rest}>
      <span>Tabs</span>
      {children}
    </As>
  );
};
export default Tabs;