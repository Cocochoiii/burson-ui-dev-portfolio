import React from 'react';
import clsx from 'clsx';

export type TimelineProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Timeline: React.FC<TimelineProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-timeline', className);
  return (
    <As className={classes} {...rest}>
      <span>Timeline</span>
      {children}
    </As>
  );
};
export default Timeline;