import React from 'react';
import clsx from 'clsx';

export type FileUploadProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const FileUpload: React.FC<FileUploadProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-fileupload', className);
  return (
    <As className={classes} {...rest}>
      <span>FileUpload</span>
      {children}
    </As>
  );
};
export default FileUpload;