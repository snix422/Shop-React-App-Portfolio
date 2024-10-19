import { render,screen,fireEvent } from '../../../libs/TestUtils';
import { describe, expect, it, vi } from 'vitest';
import HeaderActions from '../../../components/header/HeaderActions';
import React from "react";
import '@testing-library/jest-dom';

const mockSetOpenCart = vi.fn();
const mockSetOpenBurger = vi.fn();
const mockSetOpenSearch = vi.fn();

describe('HeaderActions', () => {
  it('renders all components correctly', () => {
    render(<HeaderActions setOpenCart={mockSetOpenCart} setOpenBurger={mockSetOpenBurger} setOpenSearch={mockSetOpenSearch} isAuth={null} />);
    expect(screen.getByTestId('favorite-icon')).toBeInTheDocument();
    expect(screen.getByTestId('shoppingcart-icon')).toBeInTheDocument();
    expect(screen.getByTestId('burger-icon')).toBeInTheDocument();
  });

  it('passes setOpenCart to ShoppingCartBadge', () => {
    render(<HeaderActions setOpenCart={mockSetOpenCart} setOpenBurger={mockSetOpenBurger} setOpenSearch={mockSetOpenSearch} isAuth={null} />);
    const cartBadge = screen.getByTestId('shoppingcart-icon');
    fireEvent.click(cartBadge);
    expect(mockSetOpenCart).toHaveBeenCalledWith(true)
  });

  it('passes setOpenBurger to BurgerIcon', () => {
    render(<HeaderActions setOpenCart={mockSetOpenCart} setOpenBurger={mockSetOpenBurger} setOpenSearch={mockSetOpenSearch} isAuth={null} />);
    const burgerIcon = screen.getByTestId('burger-icon');
    fireEvent.click(burgerIcon);
    expect(mockSetOpenBurger).toHaveBeenCalledWith(true);
  });
});
