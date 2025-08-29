import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../Button';

test('renders Button', () => {
  const { getByText } = render(<Button>Click</Button>);
  expect(getByText('Button')).toBeInTheDocument();
});
