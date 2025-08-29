import React from 'react';
import clsx from 'clsx';

export type VideoProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Video: React.FC<VideoProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-video', className);
  return (
    <As className={classes} {...rest}>
      <span>Video</span>
      {children}
    </As>
  );
};
export default Video;