import React from 'react';
import clsx from 'clsx';

export type BannerProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Banner: React.FC<BannerProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-banner', className);
  return (
    <As className={classes} {...rest}>
      <span>Banner</span>
      {children}
    </As>
  );
};
export default Banner;