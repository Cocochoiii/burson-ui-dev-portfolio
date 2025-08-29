import React from 'react';
import clsx from 'clsx';

export type ChartProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Chart: React.FC<ChartProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-chart', className);
  return (
    <As className={classes} {...rest}>
      <span>Chart</span>
      {children}
    </As>
  );
};
export default Chart;