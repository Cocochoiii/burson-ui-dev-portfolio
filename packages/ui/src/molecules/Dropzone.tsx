import React from 'react';
import clsx from 'clsx';

export type DropzoneProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Dropzone: React.FC<DropzoneProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-dropzone', className);
  return (
    <As className={classes} {...rest}>
      <span>Dropzone</span>
      {children}
    </As>
  );
};
export default Dropzone;