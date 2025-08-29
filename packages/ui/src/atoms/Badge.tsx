import React from 'react';
import clsx from 'clsx';

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Badge: React.FC<BadgeProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-badge', className);
  return (
    <As className={classes} {...rest}>
      <span>Badge</span>
      {children}
    </As>
  );
};
export default Badge;