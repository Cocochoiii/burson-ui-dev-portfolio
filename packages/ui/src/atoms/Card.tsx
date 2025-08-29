import React from 'react';
import clsx from 'clsx';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Card: React.FC<CardProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-card', className);
  return (
    <As className={classes} {...rest}>
      <span>Card</span>
      {children}
    </As>
  );
};
export default Card;