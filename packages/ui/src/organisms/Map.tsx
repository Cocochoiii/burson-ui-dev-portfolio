import React from 'react';
import clsx from 'clsx';

export type MapProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Map: React.FC<MapProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-map', className);
  return (
    <As className={classes} {...rest}>
      <span>Map</span>
      {children}
    </As>
  );
};
export default Map;