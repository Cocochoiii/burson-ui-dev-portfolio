import React from 'react';
import clsx from 'clsx';

export type InlineCodeProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const InlineCode: React.FC<InlineCodeProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-inlinecode', className);
  return (
    <As className={classes} {...rest}>
      <span>InlineCode</span>
      {children}
    </As>
  );
};
export default InlineCode;