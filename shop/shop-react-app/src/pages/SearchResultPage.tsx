import { useSearchParams } from "react-router-dom";
import useProductsByQuery from "../hooks/useProductsByQuery";
import ProductsList from "../components/products/ProductsList";
import Heading from "../components/Headings/Heading";
import { ProductType } from "../types/Product";
import ProductCard from "../components/products/ProductCard";
import SearchResultPlaceholder from "../components/placeholders/SearchResultPlaceholder";

const SearchResultPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const {isLoading,error,results} = useProductsByQuery(query);

    console.log(results);

    if(isLoading){
        return(
            <main className="min-h-[100vh] w-[100vw] flex flex-col items-center pt-24">
                <SearchResultPlaceholder lines={4} />
            </main>
        )
    }

    if(results.length == 0){
        return(
            <main className="min-h-[100vh] w-[100vw] flex flex-col items-center pt-24">
                <h2 className="text-3xl font-bold">Brak wyszukanych produktów dla frazy: {query}</h2>
            </main>
        )
    }
    return(
        <main className="min-h-[100vh] w-[100vw] flex flex-col items-center pt-24">
            <Heading className="text-3xl font-bold underline" level={1}>Wyszukania dla: {query}</Heading>
            <ProductsList products={results} isLoading={isLoading} error={error} viewFn={(r:ProductType)=> <ProductCard key={r.id} data={r} />} />
        </main>
    )
}

export default SearchResultPage