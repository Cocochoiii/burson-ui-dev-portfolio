import React from 'react';
import clsx from 'clsx';

export type CodeBlockProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const CodeBlock: React.FC<CodeBlockProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-codeblock', className);
  return (
    <As className={classes} {...rest}>
      <span>CodeBlock</span>
      {children}
    </As>
  );
};
export default CodeBlock;