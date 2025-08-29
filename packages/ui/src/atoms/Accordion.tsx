import React from 'react';
import clsx from 'clsx';

export type AccordionProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Accordion: React.FC<AccordionProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-accordion', className);
  return (
    <As className={classes} {...rest}>
      <span>Accordion</span>
      {children}
    </As>
  );
};
export default Accordion;