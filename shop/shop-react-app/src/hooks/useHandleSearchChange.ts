import { useRef, useState } from 'react';
import useSearchProduct from './useSearchProduct';

export const useHandleSearchChange = () => {
  const [query, setQuery] = useState("");
  const { searchProduct,searchProductNull } = useSearchProduct();
  const controllerRef = useRef<AbortController>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
        if(newQuery.length == 0){
            searchProductNull()
        }

        if (newQuery.trim() !== "") {
          if(controllerRef.current){
            controllerRef.current.abort();
            console.log('Fetching aborted')
          }
          console.log("test abort")
          controllerRef.current = new AbortController();
          searchProduct(newQuery);
        }
     
    }
  return { query, handleInputChange };
};