import { render,screen } from "@testing-library/react";
import { describe,expect,it } from "vitest";
import ProductImage from "../../../components/product-page/ProductImage";
import React from "react";
import '@testing-library/jest-dom';

describe("ProductImage",()=>{
    it("should render img",()=>{
        render(<ProductImage image="test.jpg" name="test" />)
        const img = screen.getByAltText("test");
        expect(img).toBeInTheDocument();
    })
})