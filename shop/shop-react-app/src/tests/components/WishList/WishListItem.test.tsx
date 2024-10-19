import { render,screen,fireEvent } from "../../../libs/TestUtils";
import { describe,expect,it, vi } from "vitest";
import WishListItem from "../../../components/wishlist/WishListItem";
import { ProductType } from "../../../types/Product";
import React from "react";
import '@testing-library/jest-dom';


const mockProduct: ProductType = {
    id: 1,
    name: 'Sample Product',
    league: 'Sample League',
    size: [
        { size: 'M', price: 150 }
    ],
    isRecommended: true,
    image: 'sample-image-url.jpg',
    description: 'Sample product description',
    relatedProducts: [2, 3],
    slug: 'sample-product',
};

const mockRemoveItem = vi.fn();

describe("WishListItem", ()=>{
    it("should render image", ()=>{
        render(<WishListItem data={mockProduct} removeItem={mockRemoveItem}/>)
        screen.debug();
        expect(screen.getByAltText("Sample Product")).toBeInTheDocument();
    }),
    it("should render name", ()=>{
        render(<WishListItem data={mockProduct} removeItem={mockRemoveItem}/>)
        expect(screen.getByText("Sample Product")).toBeInTheDocument();
    })
    it('should render the remove icon', () => {
        render(<WishListItem data={mockProduct} removeItem={mockRemoveItem} />);
        const deleteIcon = screen.getByTestId("btn-delete") 
        expect(deleteIcon).toBeInTheDocument();
      });
    
      it('should call removeItem when the delete icon is clicked', () => {
        render(
        <WishListItem data={mockProduct} removeItem={mockRemoveItem} />
    );
        const deleteIcon = screen.getByTestId("btn-delete")
       
        
        fireEvent.click(deleteIcon);
    
        expect(mockRemoveItem).toHaveBeenCalledWith(mockProduct.id);
      });
})