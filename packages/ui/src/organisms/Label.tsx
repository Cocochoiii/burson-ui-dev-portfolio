import React from 'react';
import clsx from 'clsx';

export type LabelProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Label: React.FC<LabelProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-label', className);
  return (
    <As className={classes} {...rest}>
      <span>Label</span>
      {children}
    </As>
  );
};
export default Label;