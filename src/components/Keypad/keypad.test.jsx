import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Keypad from "./Keypad";

describe("Keypad Component", () => {
  const props = {
    callbackFnc : '0',
    keypadClose: true
  };
  it("should render display value", async () => {

    render(<Keypad props={props}   />);
    const  displayElement = await screen.getByTestId('keypad display');
    
    expect(displayElement).toBeInTheDocument();
  });

  // it("should update display value when a button is clicked", () => {
  //   render(<Keypad />);
  //   const buttonElement = screen.getByText("1");
  //   fireEvent.click(buttonElement);
  //   const displayElement = screen.getByText("1");
  //   expect(displayElement).toBeInTheDocument();
  // });

  // it("should clear display value when C button is clicked", () => {
  //   render(<Keypad />);
  //   const buttonElement = screen.getByText("C");
  //   fireEvent.click(buttonElement);
  //   const displayElement = screen.getByText("0");
  //   expect(displayElement).toBeInTheDocument();
  // });

  // it("should call callback function when confirm button is clicked", () => {
  //   const mockCallback = vi.fn();
  //   render(<Keypad callbackFnc={mockCallback} />);
  //   const confirmButtonElement = screen.getByText("CONFIRM");
  //   fireEvent.click(confirmButtonElement);
  //   expect(mockCallback).toHaveBeenCalled();
  // });

  // it("should close keypad when confirm or close button is clicked", () => {
  //   const mockKeypadClose = vi.fn();
  //   render(<Keypad keypadClose={mockKeypadClose} />);
  //   const confirmButtonElement = screen.getByText("CONFIRM");
  //   const closeButtonElement = screen.getByText("CLOSE");
  //   fireEvent.click(confirmButtonElement);
  //   fireEvent.click(closeButtonElement);
  //   expect(mockKeypadClose).toHaveBeenCalledTimes(2);
  // });
});
