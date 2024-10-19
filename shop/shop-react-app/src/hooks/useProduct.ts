import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { ProductType } from "../types/Product"
import { getProductById } from '../api/getProductById';

const useProduct = (slug:string | undefined) => {
    if(!slug){
        return {isLoading:false,error:"Nie znaleziono produktu", product:null}
    }
    const {isLoading,error,data} : UseQueryResult<ProductType>= useQuery({
        queryKey:['product-query-key', slug],
        queryFn: () => getProductById(slug)
    })

    return {isLoading,error, product: data ?? null}
}

export default useProduct