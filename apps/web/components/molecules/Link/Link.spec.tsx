import { render, screen } from '@testing-library/react';

import { Link } from './Link';

describe('Link', () => {
  it('renders the link', () => {
    render(<Link />);
    expect(screen.getByText('Link!')).toBeInTheDocument();
  });
});
