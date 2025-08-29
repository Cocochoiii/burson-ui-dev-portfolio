import React from 'react';
import clsx from 'clsx';

export type TagProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Tag: React.FC<TagProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-tag', className);
  return (
    <As className={classes} {...rest}>
      <span>Tag</span>
      {children}
    </As>
  );
};
export default Tag;