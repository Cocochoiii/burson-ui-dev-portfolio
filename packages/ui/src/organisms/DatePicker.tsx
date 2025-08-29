import React from 'react';
import clsx from 'clsx';

export type DatePickerProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const DatePicker: React.FC<DatePickerProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-datepicker', className);
  return (
    <As className={classes} {...rest}>
      <span>DatePicker</span>
      {children}
    </As>
  );
};
export default DatePicker;