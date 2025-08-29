import React from 'react';
import clsx from 'clsx';

export type TextareaAutosizeProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const TextareaAutosize: React.FC<TextareaAutosizeProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-textareaautosize', className);
  return (
    <As className={classes} {...rest}>
      <span>TextareaAutosize</span>
      {children}
    </As>
  );
};
export default TextareaAutosize;