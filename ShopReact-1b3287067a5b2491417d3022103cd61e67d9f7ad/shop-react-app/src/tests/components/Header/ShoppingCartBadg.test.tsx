import { render,screen, fireEvent } from "../../../libs/TestUtils";
import { describe,expect,it, vi } from "vitest";
import ShoppingCartBadge from "../../../components/header/ShoppingCartBadge";
import React from "react";
import '@testing-library/jest-dom';

const mockOpenCart = vi.fn();

describe("ShoppingCartBadge",()=>{
    it("should render shoppingcart icon",()=>{
        render(<ShoppingCartBadge openCart={mockOpenCart}/>)
        expect(screen.getByTestId("badge")).toBeInTheDocument();
    })
    it("should render badge",()=>{
        render(<ShoppingCartBadge openCart={mockOpenCart}/>)
        expect(screen.getByTestId("shoppingcart-icon")).toBeInTheDocument();
    })
    it("should dispatch openCart when clicked shoppingcart icon",()=>{
        render(<ShoppingCartBadge openCart={mockOpenCart}/>)
        const shoppingCartIcon = screen.getByTestId("shoppingcart-icon");
        fireEvent.click(shoppingCartIcon);
        expect(mockOpenCart).toBeCalledWith(true);
    })
})