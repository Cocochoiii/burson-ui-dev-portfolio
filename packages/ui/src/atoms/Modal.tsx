import React from 'react';
import clsx from 'clsx';

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Modal: React.FC<ModalProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-modal', className);
  return (
    <As className={classes} {...rest}>
      <span>Modal</span>
      {children}
    </As>
  );
};
export default Modal;