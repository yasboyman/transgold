// App.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import App from './App';

describe('App component', () => {
  test('renders the heading', async () => {
    const mockFetch = () =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      });
    
    global.fetch = mockFetch;
    
    render(<App />);
    
    const headingElement = screen.getByText(/Transgold/i);
    expect(headingElement).toBeInTheDocument();
  });
});
