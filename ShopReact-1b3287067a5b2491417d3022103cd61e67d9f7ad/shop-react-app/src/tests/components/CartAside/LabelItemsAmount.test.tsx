import { render,screen } from "@testing-library/react";
import { describe,expect,it } from "vitest";
import LabelItemsAmount from "../../../components/cart-aside/LabelItemsAmount";
import React from "react";
import '@testing-library/jest-dom';

describe("LabelItemsAmount",()=>{
   it("should render label with property amount", ()=>{
    render(<LabelItemsAmount amount={2}/>)
    expect(screen.getByText(/2/i)).toBeInTheDocument();
   })
})