import { render,screen,fireEvent } from "../../../libs/TestUtils";
import { describe, vi,it, expect } from "vitest";
import PriceSelect from "../../../components/products/PriceSelect";
import React from "react";
import '@testing-library/jest-dom';

const mockOnChangePrice = vi.fn();

describe("PriceSelect",()=>{
    it("should render the component with default text",()=>{
        render(<PriceSelect selectedPrice="" onChangePrice={mockOnChangePrice}/>)
        expect(screen.getByText(/Sortuj cenę/i)).toBeInTheDocument();
    })
    /*it("should change the value to descending when the option is selected", async ()=>{
        render(<PriceSelect selectedPrice="" onChangePrice={mockOnChangePrice}/>)
        const selectElement = screen.getByTestId("price-select");
        fireEvent.mouseDown(selectElement);
        console.log("debug",screen.debug())
        const descOption = await screen.findByRole("option", { name: "Malejąco" });
        fireEvent.click(descOption);
        expect(mockOnChangePrice).toHaveBeenCalledWith("desc")
    })
    it("should change the value to ascending when the option is selected", async ()=>{
        render( 
                <PriceSelect selectedPrice="" onChangePrice={mockOnChangePrice}/> 
    )
        const selectElement = screen.getByTestId("price-select");
        fireEvent.mouseDown(selectElement);
        const ascOption = await screen.findByRole("option",{ name: "Rosnąco"});
        fireEvent.click(ascOption);
        expect(mockOnChangePrice).toHaveBeenCalledWith("asc")
    })*/

})