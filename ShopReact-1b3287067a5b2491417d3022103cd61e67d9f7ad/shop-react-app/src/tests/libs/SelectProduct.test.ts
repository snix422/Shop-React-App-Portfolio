import { describe,expect,it } from "vitest";
import { selectProduct } from "../../libs/SelectProduct";


describe("selectProduct", () => {
    it("should return an array with the first product when the array contains one object"), () => {
        const singleProduct = {
            id: 1,
            name: 'Sample Product',
            league: 'Sample League',
            size: [{ size: 'M', price: 100 }],
            isRecommended: true,
            image: 'sample-image-url.jpg',
            description: 'Sample product description',
            relatedProducts: [2, 3],
            slug: 'sample-product',
          };
        const result = selectProduct([singleProduct]);
        expect(result).toBe(singleProduct);
    },
    it("should return an empty array when the array is empty"), () => {
        const result = selectProduct([]);
        expect(result).toBe([]);
    }
    it('should return an empty array when the array contains more than one object', () => {
        const singleProduct = {
            id: 1,
            name: 'Sample Product',
            league: 'Sample League',
            size: [{ size: 'M', price: 100 }],
            isRecommended: true,
            image: 'sample-image-url.jpg',
            description: 'Sample product description',
            relatedProducts: [2, 3],
            slug: 'sample-product',
          };
          
          const anotherProduct = {
            id: 2,
            name: 'Another Product',
            league: 'Another League',
            size: [{ size: 'L', price: 150 }],
            isRecommended: false,
            image: 'another-image-url.jpg',
            description: 'Another product description',
            relatedProducts: [1],
            slug: 'another-product',
          };
        const result = selectProduct([singleProduct, anotherProduct]);
        expect(result).toEqual([]);
      });
})