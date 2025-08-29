import React from 'react';
import clsx from 'clsx';

export type RatingProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Rating: React.FC<RatingProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-rating', className);
  return (
    <As className={classes} {...rest}>
      <span>Rating</span>
      {children}
    </As>
  );
};
export default Rating;