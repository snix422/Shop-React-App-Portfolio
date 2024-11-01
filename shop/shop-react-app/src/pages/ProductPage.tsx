import { useParams } from "react-router-dom"
import useProduct from "../hooks/useProduct";
import { SizeArrayType } from "../types/Product";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/rtk";
import { addProductToCart } from "../libs/AddProduct";
import { selectPriceRange } from "../libs/SelectPriceRange";
import { selectSizePrice } from "../libs/SelectSizePrice";
import ProductDetails from "../components/product-page/ProductDetails";

const ProductPage = () => {
    const {slug} = useParams();
    const [selectedSize, setSelectedSize] = useState<SizeArrayType | null>(null);
    const [errorSize, setErrorSize] = useState<string | null>(null);
    const [priceRangeProduct, setPriceRangeProduct] = useState<string | null>(null)
    const [selectedPrice, setSelectedPrice] = useState<number | undefined>(undefined)

    const {isLoading,error,product} = useProduct(slug);
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (product) {
          const priceRange = selectPriceRange(product);
          const price = selectSizePrice(product, selectedSize);
          setPriceRangeProduct(priceRange);
          if (price !== selectedPrice) {
              setSelectedPrice(price);
          }
      }
  }, [product, selectedSize]);  

    const handleSizeSelect = (size: SizeArrayType) => {
      setErrorSize(null);
      setSelectedSize(size);
    };
  
    const handleAddToCart = () => {
      if (selectedSize) {
        setErrorSize(null);
        addProductToCart(product, selectedSize, dispatch);
      } else {
        setErrorSize("Wybierz rozmiar produktu");
      }
    };
   
   return(
    <ProductDetails product={product} selectedSize={selectedSize} errorSize={errorSize} onAddToCart={handleAddToCart} onSizeSelect={handleSizeSelect} 
      priceRange={priceRangeProduct} selectedPrice={selectedPrice} isLoading={isLoading} error={error} slug={slug} />
   )
}

export default ProductPage