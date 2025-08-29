import React from 'react';
import clsx from 'clsx';

export type AudioProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Audio: React.FC<AudioProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-audio', className);
  return (
    <As className={classes} {...rest}>
      <span>Audio</span>
      {children}
    </As>
  );
};
export default Audio;