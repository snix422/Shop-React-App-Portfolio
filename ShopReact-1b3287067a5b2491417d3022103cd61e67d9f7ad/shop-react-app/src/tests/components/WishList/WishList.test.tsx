import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render,screen } from '../../../libs/TestUtils';
import WishList from '../../../components/wishlist/WishList';
import '@testing-library/jest-dom';

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
        id: 2,
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
//const mockViewFn = vi.fn();
const mockListViewFn = vi.fn();

describe('WishList Component', () => {
  it('should render error message when there is an error', () => {
    render(<WishList isLoading={false} error={true} wishList={[]} viewFn={mockViewFn} />);
    expect(screen.getByText(/Wystąpił problem z pobraniem Bestsellerów/i)).toBeInTheDocument();
  });

  it('should render loading state when isLoading is true', () => {
    render(<WishList isLoading={true} error={false} wishList={[]} viewFn={mockViewFn} />);
    const placeholders = screen.getAllByTestId("placeholder-card-product");
    expect(placeholders.length).toBeGreaterThan(1);
  });

  it('should render the wishlist items when data is loaded', () => {
    render(<WishList isLoading={false} error={false} wishList={mockWishList} viewFn={mockViewFn} />);
    expect(screen.getByText('Sample Product 1')).toBeInTheDocument();
    expect(screen.getByText('Sample Product 2')).toBeInTheDocument();
  });

  it('should call viewFn for each item in the wishlist', () => {
    render(
      <React.Fragment>
 <WishList isLoading={false} error={false} wishList={mockWishList} viewFn={mockListViewFn} />
      </React.Fragment>
  );
    expect(mockListViewFn).toHaveBeenCalledTimes(mockWishList.length);
  
  mockWishList.forEach(product => {
    expect(mockListViewFn).toHaveBeenCalledWith(product);
  });
  });
});
