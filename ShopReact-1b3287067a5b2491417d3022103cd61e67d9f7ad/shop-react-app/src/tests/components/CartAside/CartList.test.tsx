import { describe,expect,it, vi } from "vitest";
import { render,screen } from "../../../libs/TestUtils";
import CartList from "../../../components/cart-aside/CartList";
import React from "react";
import '@testing-library/jest-dom';
import CartItem from "../../../components/cart-aside/CartItem";

//const mockViewFn = vi.fn();

const mockViewFn = vi.fn((product) => <div><h2>{product.name}</h2></div>);

const mockWishList = [
    {
        id: 1,
        name: 'Sample Product 1',
        league: 'Sample League',
        size: [
            { size: 'M', price: 150 }
        ],
        isRecommended: true,
        image: 'sample-image-url.jpg',
        description: 'Sample product description',
        relatedProducts: [2, 3],
        slug: 'sample-product',
    },
    {
        id: 2,
        name: 'Sample Product 2',
        league: 'Sample League',
        size: [
            { size: 'M', price: 150 }
        ],
        isRecommended: true,
        image: 'sample-image-url.jpg',
        description: 'Sample product description',
        relatedProducts: [2, 3],
        slug: 'sample-product',
    }
];
describe("CartList",()=>{
    it("should render items in cartlist",()=>{
        render(<CartList cartItems={[{name:'Product 1',price:50},{name:"Product 2",price:100}]} viewFn={mockViewFn} />)
        expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
    })
    it("should call viewFn for each item in cartlist",()=>{
        render(
            <React.Fragment>
                <CartList cartItems={mockWishList} viewFn={mockViewFn} />
            </React.Fragment>
    )
        //expect(mockViewFn).toHaveBeenCalledTimes(mockWishList.length)
        mockWishList.forEach((item) => {
            expect(mockViewFn).toHaveBeenCalledWith(item);
        });
    })
})