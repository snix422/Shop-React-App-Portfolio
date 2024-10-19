import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getProductsByLeague } from '../api/getProductsByLeague';
import { ProductType } from "../types/Product"

const useProductsByLeague = (league:string) => {
    const {isLoading, error, data} :UseQueryResult<ProductType[]> = useQuery({
        queryKey:['productsbyleague-query-key',league],
        queryFn: () => getProductsByLeague(league)
    })
    return {isLoading, error, products: data || []}
}

export default useProductsByLeague