import { render,screen } from "@testing-library/react";
import { describe,expect,it } from "vitest";
import { ProductType } from "../../../types/Product";
import ProductInfo from "../../../components/product-page/ProductInfo";
import React from "react";
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

describe("ProductInfo", ()=>{
    it("should render product name",()=>{
        render(<ProductInfo product={mockProduct} />)
        expect(screen.getByRole("heading",{level:1, name:/Sample Product/i})).toBeInTheDocument();
    }),
    it("should render product description",()=>{
        render(<ProductInfo product={mockProduct}/>)
        expect(screen.getByText(/Sample product description/i)).toBeInTheDocument();
    })
    it("should render product league",()=>{
        render(<ProductInfo product={mockProduct}/>)
        expect(screen.getByText(/Sample League/i)).toBeInTheDocument();
    })
    it("should render product label recommented product",()=>{
        render(<ProductInfo product={mockProduct} />)
        expect(screen.getByText(/Polecany produkt/i)).toBeInTheDocument();
    })
})