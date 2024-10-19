import { fireEvent, render,screen } from "@testing-library/react";
import { describe,expect,it, vi } from "vitest";
import AddToCartButton from "../../../components/product-page/AddToCartButton";
import React from "react";
import '@testing-library/jest-dom';

const mockAddToCart = vi.fn();

describe("AddToCartButton", ()=>{
    it("should render button with text",()=>{
        render(<AddToCartButton onAddToCart={mockAddToCart} />)
        const button = screen.getByText(/Dodaj do koszyka/i);
        expect(button).toBeInTheDocument();
    }),
    it("should call onAddToCart when the button is clicked", ()=>{
        render(<AddToCartButton onAddToCart={mockAddToCart} />)
        const button = screen.getByText(/Dodaj do koszyka/i);
        fireEvent.click(button);
        expect(mockAddToCart).toHaveBeenCalled();
    })
    
})