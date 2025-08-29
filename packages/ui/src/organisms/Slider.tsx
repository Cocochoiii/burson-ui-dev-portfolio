import React from 'react';
import clsx from 'clsx';

export type SliderProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Slider: React.FC<SliderProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-slider', className);
  return (
    <As className={classes} {...rest}>
      <span>Slider</span>
      {children}
    </As>
  );
};
export default Slider;