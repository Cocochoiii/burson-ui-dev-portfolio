import React from 'react';
import clsx from 'clsx';

export type CalendarProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Calendar: React.FC<CalendarProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-calendar', className);
  return (
    <As className={classes} {...rest}>
      <span>Calendar</span>
      {children}
    </As>
  );
};
export default Calendar;