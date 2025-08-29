import React from 'react';
import clsx from 'clsx';

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Avatar: React.FC<AvatarProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-avatar', className);
  return (
    <As className={classes} {...rest}>
      <span>Avatar</span>
      {children}
    </As>
  );
};
export default Avatar;