import React from 'react';
import clsx from 'clsx';

export type ImageProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Image: React.FC<ImageProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-image', className);
  return (
    <As className={classes} {...rest}>
      <span>Image</span>
      {children}
    </As>
  );
};
export default Image;