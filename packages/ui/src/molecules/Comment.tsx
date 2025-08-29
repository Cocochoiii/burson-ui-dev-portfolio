import React from 'react';
import clsx from 'clsx';

export type CommentProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Comment: React.FC<CommentProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-comment', className);
  return (
    <As className={classes} {...rest}>
      <span>Comment</span>
      {children}
    </As>
  );
};
export default Comment;