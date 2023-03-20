// src/components//Tab/tabs.tests/jsx
import { fireEvent, render, screen } from "@testing-library/react";

import Tabs from "./Tabs";

describe("Two tabs", () => {
  it("renders the heading", () => {
    render(<Tabs />);
    const tabText1 = screen.getByText(/Gold Converter/i);
    const tabText2 = screen.getByText(/Currency Converter/i);
    expect(tabText1).toBeInTheDocument();
    expect(tabText2).toBeInTheDocument();
  });

  it("renders the currency", () => {
    render(<Tabs />);
    const currencyTab = screen.getByTestId("currencyTab");
    const currencyTab2 = screen.getByTestId("goldTab");
    const tabText1 = screen.getByText(/Currency Converter/i);
    const tabText2 = screen.getByText(/Gold Converter/i);
    fireEvent.click(tabText1);
    expect(currencyTab).toHaveClass("_active_4ae4ac\n");

    fireEvent.click(tabText2);
    expect(currencyTab2).toHaveClass("_active_4ae4ac\n");
  });
});
