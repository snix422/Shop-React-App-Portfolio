import useSearchProduct from "../hooks/useSearchProduct";

const {searchProduct} = useSearchProduct()

export const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const newQuery = e.target.value;
  if(newQuery){
      searchProduct(newQuery)
  }
}