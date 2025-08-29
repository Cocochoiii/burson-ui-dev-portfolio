import React from 'react';
import clsx from 'clsx';

export type SegmentedControlProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const SegmentedControl: React.FC<SegmentedControlProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-segmentedcontrol', className);
  return (
    <As className={classes} {...rest}>
      <span>SegmentedControl</span>
      {children}
    </As>
  );
};
export default SegmentedControl;