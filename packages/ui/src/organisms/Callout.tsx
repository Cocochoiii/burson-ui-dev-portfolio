import React from 'react';
import clsx from 'clsx';

export type CalloutProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Callout: React.FC<CalloutProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-callout', className);
  return (
    <As className={classes} {...rest}>
      <span>Callout</span>
      {children}
    </As>
  );
};
export default Callout;