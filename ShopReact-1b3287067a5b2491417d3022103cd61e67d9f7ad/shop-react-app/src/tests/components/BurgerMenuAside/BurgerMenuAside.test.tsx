import { render,screen } from "@testing-library/react";
import { describe,expect,it, vi } from "vitest";
import BurgerMenuAside from "../../../components/burger-menu-aside/BurgeMenuAside";
import React from "react";
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";


const mockSetOpen = vi.fn();

describe("BurgerMenuAside",()=>{
    it("should render drawer in component",()=>{
        render(<MemoryRouter>
            <BurgerMenuAside isOpen={true} setOpen={mockSetOpen} auth={null}/>
            </MemoryRouter>)
        screen.debug();
        expect(screen.getByTestId("drawer")).toBeInTheDocument();
    })
    it("should render heading in component", ()=>{
        render(
            <MemoryRouter>
        <BurgerMenuAside isOpen={true} setOpen={mockSetOpen} auth={null} />
        </MemoryRouter>
    )
        expect(screen.getByText(/Menu/i)).toBeInTheDocument();
    })
    it("should render menu in component",()=>{
        render(
            <MemoryRouter>
        <BurgerMenuAside isOpen={true} setOpen={mockSetOpen} auth={null} />
        </MemoryRouter>)
        expect(screen.getByRole("navigation")).toBeInTheDocument();
    })
    it("should render drawer with good width", () => {
        render(
            <MemoryRouter>
        <BurgerMenuAside isOpen={true} setOpen={mockSetOpen} auth={null} />
        </MemoryRouter>
    );
        const drawer = screen.getByTestId("drawer") as HTMLElement;
        expect(drawer).toHaveStyle('width: 50vw');
    });
})