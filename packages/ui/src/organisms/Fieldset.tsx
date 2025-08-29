import React from 'react';
import clsx from 'clsx';

export type FieldsetProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Fieldset: React.FC<FieldsetProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-fieldset', className);
  return (
    <As className={classes} {...rest}>
      <span>Fieldset</span>
      {children}
    </As>
  );
};
export default Fieldset;