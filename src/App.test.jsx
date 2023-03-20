import { render, screen } from '@testing-library/react';
import {describe} from "vitest";

import App from './App';

describe('App component', () => {
  it('renders the heading',  () => {
    render(<App />);
    
    const headingElement = screen.getByText(/Transgold/i);
    expect(headingElement).toBeInTheDocument();
  });
});