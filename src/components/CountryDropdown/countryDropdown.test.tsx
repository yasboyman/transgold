import {fireEvent, getAllByTestId, getByTestId, render, screen, within,} from "@testing-library/react";
import CountryDropdown from "./CountryDropdown";

describe("CountryDropdown", () => {
    // const mockOnChange = jest.fn();
    const props = {
         onChangeCallback: vi.fn(),
        value: "AED"
    };

    test("renders a select element with options for each country", () => {
        const  {getByRole} = render(<CountryDropdown {...props} />);
        const dropdownDiv = getByRole('button', { name: 'Country Flag of UAE Dirham AED - UAE Dirham' });

        expect(dropdownDiv).toBeInTheDocument();
    });

    // test("calls onChangeCallback when a new country is selected", () => {
    //     const { getByLabelText, getByText } = render(<CountryDropdown {...props} />);
    //     const selectElement = getByLabelText("Country");
    //
    //     fireEvent.change(selectElement, { target: { value: "CA" } });
    //     expect(mockOnChange).toHaveBeenCalledWith("CA");
    // });
});
