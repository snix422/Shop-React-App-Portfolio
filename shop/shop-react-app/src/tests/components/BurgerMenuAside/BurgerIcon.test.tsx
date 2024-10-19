import { fireEvent, render,screen } from "@testing-library/react";
import { describe,expect,it, vi } from "vitest";
import BurgerIcon from "../../../components/burger-menu-aside/BurgerIcon";
import React from "react";
import '@testing-library/jest-dom';


const mockSetBurger = vi.fn();

describe("BurgerIcon",()=>{
    it("should render BurgerIcon in component",()=>{
        render(<BurgerIcon setBurger={mockSetBurger}/>)
        expect(screen.getByTestId("burger-icon")).toBeInTheDocument();
    })
    it("calls setBurger when burger icon is clicked",()=>{
        render(<BurgerIcon setBurger={mockSetBurger} />)
        const burgerIcon = screen.getByTestId("burger-icon");
        fireEvent.click(burgerIcon);
        expect(mockSetBurger).toHaveBeenCalledWith(true);
    })
})