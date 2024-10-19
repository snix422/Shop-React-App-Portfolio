import useBestsellers from "../../hooks/useBestsellers";
import { ProductType } from "../../types/Product";
import Heading from "../Headings/Heading";
import ProductCard from "../products/ProductCard";
import BestsellersList from "./BestsellersList";


const BestsellersContainer = () => {
    const {isLoading,error, bestsellers} = useBestsellers();
   
    return(
        <section className="w-[100vw] min-h-[100vh] flex flex-col items-center gap-4">
            <Heading level={2} className="text-4xl pt-4 font-bold underline">Polecane</Heading>
            <BestsellersList bestsellers={bestsellers} isLoading={isLoading} error={error} viewFn={(bestseller:ProductType) => <ProductCard key={bestseller.id} data={bestseller} /> } />
        </section>
    )
}

export default BestsellersContainer