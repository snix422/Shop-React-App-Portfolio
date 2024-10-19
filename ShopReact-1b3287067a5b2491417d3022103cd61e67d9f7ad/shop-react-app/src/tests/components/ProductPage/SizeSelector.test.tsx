import { render,screen } from "@testing-library/react";
import { describe,expect,it, vi } from "vitest";
import SizeSeletor from "../../../components/product-page/SizeSelector";
import React from "react";
import '@testing-library/jest-dom';


const mockOnSizeSelect = vi.fn();

describe("SizeSelector", ()=>{
    it("should render heading choose size",()=>{
        render(<SizeSeletor sizes={[{size:"L",price:50},{size:"XL",price:100}]} errorSize={"Wybierz rozmiar aby dodać produkt do koszyka"}
            selectedSize={{size:"L",price:50}} priceRange="50-100" price={50} onSizeSelect={mockOnSizeSelect} />)
        expect(screen.getByText("Wybierz rozmiar:")).toBeInTheDocument();
    })
    it("should render buttons sizes", ()=>{
        render(<SizeSeletor sizes={[{size:"L",price:50},{size:"XL",price:100}]} errorSize={"Wybierz rozmiar aby dodać produkt do koszyka"}
            selectedSize={{size:"L",price:50}} priceRange="50-100" price={50} onSizeSelect={mockOnSizeSelect} />)
        expect(screen.getByText("L")).toBeInTheDocument();
        expect(screen.getByText("XL")).toBeInTheDocument();
    })
    it("should render price range if not selectedsize",()=>{
        render(<SizeSeletor sizes={[{size:"L",price:50},{size:"XL",price:100}]} errorSize={"Wybierz rozmiar aby dodać produkt do koszyka"}
            selectedSize={null} priceRange="50-100" price={50} onSizeSelect={mockOnSizeSelect} />)
        expect(screen.getByText(/50-100/i)).toBeInTheDocument();
    })
    it("should render price if selectedsize is choosen",()=>{
        render(<SizeSeletor sizes={[{size:"L",price:50},{size:"XL",price:100}]} errorSize={"Wybierz rozmiar aby dodać produkt do koszyka"}
            selectedSize={{size:"L",price:50}} priceRange="50-100" price={50} onSizeSelect={mockOnSizeSelect} />)
        expect(screen.getByText(/50/i)).toBeInTheDocument();
    })
    it("should render error message",()=>{
        render(<SizeSeletor sizes={[{size:"L",price:50},{size:"XL",price:100}]} errorSize={"Wybierz rozmiar aby dodać produkt do koszyka"}
            selectedSize={{size:"L",price:50}} priceRange="50-100" price={50} onSizeSelect={mockOnSizeSelect} />)
        expect(screen.getByText(/Wybierz rozmiar aby/i)).toBeInTheDocument();
    })
})