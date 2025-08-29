import React from 'react';
import clsx from 'clsx';

export type HeroProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Hero: React.FC<HeroProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-hero', className);
  return (
    <As className={classes} {...rest}>
      <span>Hero</span>
      {children}
    </As>
  );
};
export default Hero;