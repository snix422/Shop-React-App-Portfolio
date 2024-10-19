import { render,screen } from "@testing-library/react"
import { describe,expect,it } from "vitest"
import Logo from "../../../components/header/Logo"
import React from "react";
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";



describe("Logo", ()=>{
    it("should render logo", ()=>{
        render(<MemoryRouter>
                    <Logo />
            </MemoryRouter>)
        expect(screen.getByText(/Logo/i)).toBeInTheDocument();
    })
    it("should components contains link", ()=>{
        render(<MemoryRouter>
            <Logo />
    </MemoryRouter>)
        expect(screen.getByTestId("link")).toBeInTheDocument();
    })
})