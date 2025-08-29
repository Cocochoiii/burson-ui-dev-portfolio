import React from 'react';
import clsx from 'clsx';

export type RadioProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Radio: React.FC<RadioProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-radio', className);
  return (
    <As className={classes} {...rest}>
      <span>Radio</span>
      {children}
    </As>
  );
};
export default Radio;