import { useDispatch, useSelector } from "react-redux";
import useProducts from "../hooks/useProducts";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { applyFilters, setCategoryFilter, setPriceFilter, setProducts } from "../redux/slices/FilterProductsSlice";
import Heading from "../components/Headings/Heading";
import FilterSelect from "../components/products/FilterSelect";
import CategorySelect from "../components/products/CategorySelect";
import PriceSelect from "../components/products/PriceSelect";
import ProductsList from "../components/products/ProductsList";
import { ProductType } from "../types/Product";
import ProductCard from "../components/products/ProductCard";

const ShopPage = () => {
    const {isLoading,error,products} = useProducts();
    const dispatch = useDispatch();
    const { filteredProducts, selectedCategory, selectedPrice } = useSelector((state: RootState) => state.filterProductsSlice);

    const leagues = products ? Array.from(new Set(products.map(product => product.league))) : [];

    useEffect(() => {
        if (products.length > 0) {
            dispatch(setProducts(products));
        }
    }, [products, dispatch]);

    useEffect(() => {
        dispatch(applyFilters());
    }, [selectedCategory, selectedPrice, dispatch]);

    const handleCategoryChange = (category: string) => {
        dispatch(setCategoryFilter(category));
    };

    const handlePriceChange = (price: string) => {
        dispatch(setPriceFilter(price));
    };
    return(
        <main className="flex flex-col items-center gap-2 pt-12">
            <Heading className="text-3xl font-bold underline" level={2}>Nasze Produkty</Heading>
            <FilterSelect>
                <CategorySelect selectedCategory={selectedCategory} onChangeCategory={handleCategoryChange} leagues={leagues} />
                <PriceSelect  selectedPrice={selectedPrice} onChangePrice={handlePriceChange} />
            </FilterSelect>
            <ProductsList products={filteredProducts} isLoading={isLoading} error={error} viewFn={(product:ProductType)=><ProductCard key={product.id} data={product}/>}/>
        </main>
    )
}

export default ShopPage