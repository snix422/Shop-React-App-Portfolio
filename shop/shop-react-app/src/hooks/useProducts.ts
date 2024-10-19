import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getAllProducts } from "../api/getAllProducts"
import { ProductType } from "../types/Product"

const useProducts = () => {
    const {isLoading,error,data} :UseQueryResult<ProductType[]> = useQuery({
        queryKey:['products-query-key'],
        queryFn: getAllProducts
    })
    return {isLoading, error, products:data || []}
}

export default useProducts