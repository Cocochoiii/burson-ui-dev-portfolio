import React from 'react';
import clsx from 'clsx';

export type TextareaProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Textarea: React.FC<TextareaProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-textarea', className);
  return (
    <As className={classes} {...rest}>
      <span>Textarea</span>
      {children}
    </As>
  );
};
export default Textarea;