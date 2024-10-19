import { useQuery } from "@tanstack/react-query"
import { getProductsByQuery } from "../api/getProductsByQuery";
import { useRef } from "react";

const useProductsByQuery = (query:string) => {
    const controllerRef = useRef<AbortController | null>(null);
    const shouldFetch = query.trim() !== "";
    const {isLoading,error,data} = useQuery({
        queryKey:['searchproducts-query-key',query],
        queryFn: () => {
            if (controllerRef.current) {
                console.log("abort")
                controllerRef.current.abort(); // Anuluj poprzednie zapytanie
            }
            controllerRef.current = new AbortController(); // Tworzymy nowy AbortController
            return getProductsByQuery(query, controllerRef.current.signal); // Przekazujemy sygnał do fetchowania
        },
        enabled: shouldFetch
    })

    if (!shouldFetch && data) {
        return { isLoading: false, error: null, results: [] }; 
    }

    return {isLoading,error,results: data || []}
}

export default useProductsByQuery