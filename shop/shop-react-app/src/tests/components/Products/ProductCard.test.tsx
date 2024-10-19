import React from "react";
import { describe,expect,it } from "vitest";
import '@testing-library/jest-dom'
import { render,screen } from "../../../libs/TestUtils";
import { ProductType } from "../../../types/Product";
import ProductCard from "../../../components/products/ProductCard";
import '@testing-library/jest-dom';

const mockProduct: ProductType = {
    id: 1,
    name: 'Sample Product',
    league: 'Sample League',
    size: [
        { size: 'M', price: 150 }
    ],
    isRecommended: true,
    image: 'sample-image-url.jpg',
    description: 'Sample product description',
    relatedProducts: [2, 3],
    slug: 'sample-product',
};

describe("ProductCard", ()=>{
    it("should render product name and description", ()=>{
        render(<ProductCard data={mockProduct} />)
        expect(screen.getByRole('heading', { name: /Sample Product/i })).toBeInTheDocument();
    }),
    it("should render product image", ()=>{
        render(<ProductCard data={mockProduct} />)
        expect(screen.getByAltText(/Sample Product/i)).toBeInTheDocument();
    }),
    it("should render product button", ()=>{
        render(<ProductCard data={mockProduct} />)
        const button = screen.getByRole("button",{name: /Pokaż/i});
        expect(button).toBeInTheDocument();
    })
})