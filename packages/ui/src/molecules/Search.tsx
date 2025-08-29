import React from 'react';
import clsx from 'clsx';

export type SearchProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

export const Search: React.FC<SearchProps> = ({ as: As = 'div', className, children, ...rest }) => {
  const classes = clsx('ui-search', className);
  return (
    <As className={classes} {...rest}>
      <span>Search</span>
      {children}
    </As>
  );
};
export default Search;