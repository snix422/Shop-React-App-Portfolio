import { describe, expect, it } from "vitest";
import { selectPriceRange } from "../../libs/SelectPriceRange";

describe("selectPriceRange", () => {
    it("should return correct price range for a product with multiple sizes", () => {
        const sampleProduct = {
            id: 1,
            name: 'Sample Product',
            league: 'Sample League',
            size: [
              { size: 'S', price: 100 },
              { size: 'M', price: 200 },
              { size: 'L', price: 150 },
            ],
            isRecommended: true,
            image: 'sample-image-url.jpg',
            description: 'Sample product description',
            relatedProducts: [2, 3],
            slug: 'sample-product',
          };

        const result = selectPriceRange(sampleProduct);
        expect(result).toBe("100 - 200 PLN");
    }),

    it("should return the same price when only one size is present", () => {
        const productWithSingleSize = {
            id: 2,
            name: 'Single Size Product',
            league: 'Single League',
            size: [{ size: 'M', price: 50 }],
            isRecommended: false,
            image: 'single-size-image.jpg',
            description: 'Single size product description',
            relatedProducts: [],
            slug: 'single-size-product',
          };

          const result = selectPriceRange(productWithSingleSize);
          expect(result).toBe("50 - 50 PLN");
    })

    it("should handle empty size array gracefully", ()=>{
        const productWithEmptySize = {
            id: 3,
            name: 'Empty Size Product',
            league: 'Empty League',
            size: [],
            isRecommended: false,
            image: 'empty-size-image.jpg',
            description: 'Empty size product description',
            relatedProducts: [],
            slug: 'empty-size-product',
          };
          const result = selectPriceRange(productWithEmptySize);
          expect(result).toBe("Brak cen dostępnych")
    })
})