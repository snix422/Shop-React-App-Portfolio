import { useNavigate } from "react-router-dom"

const useSearchProduct = () => {

    const navigate = useNavigate();

    const searchProduct = (query:string) => {
        navigate(`/search?query=${encodeURIComponent(query)}`)
    }

    const searchProductNull = () => {
        navigate("/")
    }

    return {searchProduct,searchProductNull}

}

export default useSearchProduct