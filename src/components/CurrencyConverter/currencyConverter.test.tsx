import { render, screen } from '@testing-library/react';
import {describe} from "vitest";

import CurrencyConverter from './CurrencyConverter';

describe('App component', () => {
    it('renders the remember me checkbox',  () => {
        render(<CurrencyConverter />);

        const headingElement = screen.getByText(/Remember/i);
        expect(headingElement).toBeInTheDocument();
    });

});