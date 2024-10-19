import { render,screen,fireEvent } from "../../../libs/TestUtils";
import { describe, vi,it, expect } from "vitest";
import CategorySelect from "../../../components/products/CategorySelect";
import React from "react";
import '@testing-library/jest-dom';

const mockOnChangeCategory = vi.fn();

describe("CategorySelect", ()=>{
    it("should render the component with default text",()=>{
        render(<CategorySelect leagues={[]} selectedCategory="" onChangeCategory={mockOnChangeCategory} />)
        expect(screen.getByTestId("select")).toBeInTheDocument();
    })
    /*it("should change the value to La liga when the option is selected", async ()=>{
        render(<CategorySelect leagues={["La liga", "Premier League"]} selectedCategory="" onChangeCategory={mockOnChangeCategory} />);

        // Znajdź element Select
        const selectElement = screen.getByTestId("select");
    
        // Otwórz menu opcji
        fireEvent.click(selectElement);
    
        // Znajdź opcję "La liga" za pomocą roli listy rozwijanej
        const laLigaOption = await screen.findByRole('option', { name: "La liga" });
    
        // Kliknij w opcję "La liga"
        fireEvent.click(laLigaOption);
    
        // Sprawdź, czy funkcja onChange została wywołana z wartością "La liga"
        expect(mockOnChangeCategory).toHaveBeenCalledWith("La liga");
    })*/
})