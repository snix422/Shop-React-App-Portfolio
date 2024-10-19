import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import FilterSelect from "../../../components/products/FilterSelect";
import CategorySelect from "../../../components/products/CategorySelect";
import PriceSelect from "../../../components/products/PriceSelect";
import '@testing-library/jest-dom';


const mockHandleCategoryChange = vi.fn();
const mockHandlePriceChange = vi.fn();
const leagues = ["La Liga", "Premier League"];
const selectedCategory = "La Liga";
const selectedPrice = "asc";

describe("FilterSelect", () => {
    it('should pass props to CategorySelect and PriceSelect', () => {
        render(
          <FilterSelect>
            <CategorySelect
              selectedCategory="Premier League"
              onChangeCategory={mockHandleCategoryChange}
              leagues={['La Liga', 'Premier League']}
            />
            <PriceSelect
              selectedPrice="asc"
              onChangePrice={mockHandlePriceChange}
            />
          </FilterSelect>
        );

    expect(screen.getByTestId("select")).toBeInTheDocument();
    expect(screen.getByTestId("price-select")).toBeInTheDocument();
})})
