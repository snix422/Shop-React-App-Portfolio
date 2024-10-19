import { beforeEach, describe,expect,it, vi } from "vitest"

import { fireEvent, render,screen } from "@testing-library/react";
import { addToCart, decreaseAmount, removeFromCart } from "../../../redux/slices/CartSlice";
import CartItem from "../../../components/cart-aside/CartItem";
import React from "react";
import '@testing-library/jest-dom';

const mockitem = 
    {
        id: 1,
        name: 'Sample Product 1',
        league: 'Sample League',
        isRecommended: true,
        image: 'sample-image-url.jpg',
        description: 'Sample product description',
        relatedProducts: [2, 3],
        slug: 'sample-product',
        size: "L",
        price: 50,
        amount:2
    }

    const mockDispatch = vi.fn();


describe("CartItem",()=>{
    beforeEach(()=>{
        mockDispatch.mockClear();
    })
    it("should render image",()=>{
        render(<CartItem data={mockitem} dispatch={mockDispatch} />)
        expect(screen.getByAltText(/Sample Product 1/i)).toBeInTheDocument();
    })
    it("should render name",()=>{
        render(<CartItem data={mockitem} dispatch={mockDispatch}/>)
        expect(screen.getByText(/Sample Product 1/i)).toBeInTheDocument();
    })
    it("should render amount",()=>{
        render(<CartItem data={mockitem} dispatch={mockDispatch}/>)
        expect(screen.getByText(/2/)).toBeInTheDocument();
    })
    it("should render price",()=>{
        render(<CartItem data={mockitem} dispatch={mockDispatch}/>)
        expect(screen.getByText(/50 zł/i)).toBeInTheDocument();
    })
    it("should dispatch addToCart action when AddIcon is clicked",()=>{
        render(<CartItem data={mockitem} dispatch={mockDispatch} />)
        const addBtn = screen.getByTestId("AddIcon");
        fireEvent.click(addBtn);
        expect(mockDispatch).toHaveBeenCalledWith(addToCart(mockitem))
    })
    it("should dispatch decreaseAmount action when RemoveIcon is clicked",()=>{
        render(<CartItem data={mockitem} dispatch={mockDispatch}/>)
        const removeBtn = screen.getByTestId("RemoveIcon");
        fireEvent.click(removeBtn);
        expect(mockDispatch).toHaveBeenCalledWith(decreaseAmount(mockitem))
    })
    it("should dispatch removeFromCart action when DeleteIcon is clicked",()=>{
        render(<CartItem data={mockitem} dispatch={mockDispatch}/>)
        const deleteBtn = screen.getByTestId("DeleteForeverIcon");
        fireEvent.click(deleteBtn);
        expect(mockDispatch).toHaveBeenCalledWith(removeFromCart(mockitem))
    })
})