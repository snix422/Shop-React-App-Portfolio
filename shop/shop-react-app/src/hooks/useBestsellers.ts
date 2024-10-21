import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { ProductType } from "../types/Product"
import { getBestsellers } from '../api/getBestsellers';

const useBestsellers = () => {
    const {isLoading,error,data} :UseQueryResult<ProductType[]> = useQuery({
        queryKey: ['bestsellers-query-key'],
        queryFn: getBestsellers
    })

    return {isLoading,error,bestsellers: data || []}
}

export default useBestsellers