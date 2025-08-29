import React from 'react';
import clsx from 'clsx';

export type IconProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Icon: React.FC<IconProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-icon', className);
  return (
    <As className={classes} {...rest}>
      <span>Icon</span>
      {children}
    </As>
  );
};
export default Icon;