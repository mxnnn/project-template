import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('renders the button', () => {
    render(<Button />);
    expect(screen.getByText('Button!')).toBeInTheDocument();
  });
});
