import { describe, expect, it, vi } from "vitest";
import WishList from "../../../components/wishlist/WishList";
import { render,screen } from "../../../libs/TestUtils";
import React from "react";
import '@testing-library/jest-dom';
import ProductsList from "../../../components/products/ProductsList";

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
        id: 1,
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
const mockViewFn = vi.fn((product) => <div key={product.id}>{product.name}</div>);
const mockRenderItemFn = vi.fn();

describe('WishList Component', () => {
    it('should render error message when there is an error', () => {
      render(<ProductsList isLoading={false} error={true} products={[]} viewFn={mockViewFn} />);
      expect(screen.getByText(/Wystąpił problem z pobraniem Bestsellerów/i)).toBeInTheDocument();
    });
  
    it('should render loading state when isLoading is true', () => {
      render(<ProductsList isLoading={true} error={false} products={[]} viewFn={mockViewFn} />);
      console.log(screen.debug());
      expect(screen.getByTestId("placeholder")).toBeInTheDocument();
    });
  
    it('should render the wishlist items when data is loaded', () => {
      render(<ProductsList isLoading={false} error={false} products={mockWishList} viewFn={mockViewFn} />);
      expect(screen.getByText('Sample Product 1')).toBeInTheDocument();
      expect(screen.getByText('Sample Product 2')).toBeInTheDocument();
    });
  
    it('should call viewFn for each item in the wishlist', () => {
      render(<ProductsList isLoading={false} error={false} products={mockWishList} viewFn={mockRenderItemFn} />);
      expect(mockRenderItemFn).toHaveBeenCalledTimes(mockWishList.length);
      expect(mockRenderItemFn).toHaveBeenCalledWith(mockWishList[0]);
      expect(mockRenderItemFn).toHaveBeenCalledWith(mockWishList[1]);
    });
  });