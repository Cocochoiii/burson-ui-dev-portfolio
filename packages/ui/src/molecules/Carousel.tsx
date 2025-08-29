import React from 'react';
import clsx from 'clsx';

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Carousel: React.FC<CarouselProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-carousel', className);
  return (
    <As className={classes} {...rest}>
      <span>Carousel</span>
      {children}
    </As>
  );
};
export default Carousel;