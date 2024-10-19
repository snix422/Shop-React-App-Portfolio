import { render,screen } from "../../../libs/TestUtils";
import { describe,expect,it, vi } from "vitest";
import WishListIcon from "../../../components/header/WishListIcon";
import React from "react";
import '@testing-library/jest-dom';
import useWishList from "../../../hooks/useWishList";
import { MemoryRouter } from "react-router-dom";

vi.mock('../../hooks/useWishList');

describe("WishListIcon",()=>{
    it("should render favorite icon", ()=>{
        render(
                <WishListIcon />
        );
        expect(screen.getByTestId("favorite-icon")).toBeInTheDocument();
    })
    it("should render badge",()=>{
        render(
                <WishListIcon />
        );
        expect(screen.getByTestId("badge")).toBeInTheDocument();
    })
})