import { describe, expect,it } from "vitest";
import { selectSizePrice } from "../../libs/SelectSizePrice";


const product = {
    id: 1,
    name: 'Sample Product',
    league: 'Sample League',
    size: [
      { size: 'S', price: 100 },
      { size: 'M', price: 150 },
      { size: 'L', price: 200 }
    ],
    isRecommended: true,
    image: 'sample-image-url.jpg',
    description: 'Sample product description',
    relatedProducts: [2, 3],
    slug: 'sample-product',
  };

describe("selectSizePrice", ()=>{
    it("should return the price for the selected size if it exists", ()=>{
        const selectedSize = {size:"M", price:150};
        const result = selectSizePrice(product,selectedSize);
        expect(result).toBe(150);
    }),
    it("should return undefined for a size that does not exist", ()=>{
        const selectedSize = {size:"XL",price:250};
        const result = selectSizePrice(product,selectedSize);
        expect(result).toBeUndefined();
    }),
    it("should return undefined when selectedSize is null", ()=>{
        const result = selectSizePrice(product,null);
        expect(result).toBeUndefined();
    })
})