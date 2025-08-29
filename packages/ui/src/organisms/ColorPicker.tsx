import React from 'react';
import clsx from 'clsx';

export type ColorPickerProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const ColorPicker: React.FC<ColorPickerProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-colorpicker', className);
  return (
    <As className={classes} {...rest}>
      <span>ColorPicker</span>
      {children}
    </As>
  );
};
export default ColorPicker;