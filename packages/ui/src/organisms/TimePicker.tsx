import React from 'react';
import clsx from 'clsx';

export type TimePickerProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const TimePicker: React.FC<TimePickerProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-timepicker', className);
  return (
    <As className={classes} {...rest}>
      <span>TimePicker</span>
      {children}
    </As>
  );
};
export default TimePicker;