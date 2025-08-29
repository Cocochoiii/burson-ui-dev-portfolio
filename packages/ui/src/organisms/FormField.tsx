import React from 'react';
import clsx from 'clsx';

export type FormFieldProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const FormField: React.FC<FormFieldProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-formfield', className);
  return (
    <As className={classes} {...rest}>
      <span>FormField</span>
      {children}
    </As>
  );
};
export default FormField;